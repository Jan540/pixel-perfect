using System.Data;
using System.Security.Authentication;
using System.Security.Claims;
using Bogus;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Subscriptions;
using ipt_project_cepbep.Config;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL.Auth;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net;
using Path = System.IO.Path;
namespace ipt_project_cepbep.GraphQL.UserCepbep;

[ExtendObjectType(Name = "Mutation")]
public class UserMutation
{
    [GraphQLName("registerUser")]
    public async Task<UserResponse> RegisterUser(AppDbContext context, [Service] IHttpContextAccessor httpContextAccessor, 
        string username, string email, string password)
    {
        if (!email.IsValidEmail())
            throw new ArgumentException("Invalid email address! ᮯ");

        if (!username.IsValidUsername())
            throw  new ArgumentException("Invalid Username! 𒌥");

        if (!password.IsValidPassword())
            throw new ArgumentException("Password does not meet requirements! 𒌦");

        if (context.Users.Any(u => u.Username == username))
            throw new DuplicateNameException("Username already taken! ⤐⤓⤣");

        if (context.Users.Any(u => u.Email == email.ToLower()))
            throw new DuplicateNameException("Email already taken! ﷅ");

        string passwordHash = await Task.Run(() => BC.BCrypt.HashPassword(password));
        var user = new User(email.ToLower(), username, passwordHash, UserRole.User);
        context.Users.Add(user);
        await context.SaveChangesAsync();

        string refreshToken = TokenGenerator.GenRefreshToken(user);
        httpContextAccessor.HttpContext?.Response.Cookies.Append("jid", refreshToken, CookieConfig.Options);

        return new UserResponse(user, TokenGenerator.GenAccessToken(user));
    }

    [GraphQLName("deleteUser")]
    [Authorize(Roles = new[] { "Admin" })]
    public async Task<User> DeleteUser(AppDbContext context, string email)
    { 
        var user = await context.Users.Where(u => u.Email == email.ToLower()).FirstOrDefaultAsync();
        
        if (user is null)
            throw new ArgumentException("User not Found!");

        context.Users.Remove(user);
        await context.SaveChangesAsync();
        return user;
    }

    [GraphQLName("loginUser")]
    [UseFirstOrDefault]
    public async Task<UserResponse> LoginUser(AppDbContext context, [Service] IHttpContextAccessor httpContextAccessor, 
        string email, string password)
    {
        User? user = await context.Users.FirstOrDefaultAsync(u => u.Email == email.ToLower());
        if (user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            string refreshToken = TokenGenerator.GenRefreshToken(user);
            httpContextAccessor.HttpContext?.Response.Cookies.Append("jid", refreshToken, CookieConfig.Options);
            return new UserResponse(user, TokenGenerator.GenAccessToken(user));
        }

        throw new InvalidCredentialException("Email or password is Incorrect! 𒀭");
    }

    [GraphQLName("updateUsername")]
    [Authorize]
    public async Task<User> UpdateUsername(AppDbContext context, ClaimsPrincipal claimsPrincipal, string username)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FindAsync(userId);

        if (user == null)
            throw new AuthenticationException("User not Found!");

        user.Username = username;
        await context.SaveChangesAsync();
        return user;
    }
    
    [GraphQLName("uploadProfilePicture")]
    [Authorize]
    public async Task<User> UploadProfilePicture(AppDbContext context, ClaimsPrincipal claimsPrincipal, IFile file)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));

        User? user = await context.Users.FindAsync(userId);
        
        if (user is null)
            throw new ArgumentException("User not Found!");

        if (!file.ContentType!.StartsWith("image/") && !new[] {".png", ".jpg", ".jpeg"}.Contains(Path.GetExtension(file.Name).ToLower()))
            throw new ArgumentException("File is not an image!");
        
        await using var stream = File.Create(Path.Combine("ProfilePictures", $"{userId}{Path.GetExtension(file.Name)}"));
        await file.CopyToAsync(stream);
        return user;
    }
    
    [GraphQLName("refreshUser")]
    public async Task<UserResponse> RefreshUser(AppDbContext context, [Service] IHttpContextAccessor httpContextAccessor)
    {
        string? token = httpContextAccessor.HttpContext?.Request.Cookies["jid"];

        if (token is null)
            return new UserResponse(new User("", "", "", UserRole.User), "");

        var principal = TokenGenerator.GetPrincipal(token, TokenType.Refresh);

        Guid userid = Guid.Parse(principal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FirstOrDefaultAsync(u => u.UserId == userid);

        if (user is null)
        {
            httpContextAccessor.HttpContext?.Response.Cookies.Delete("jid");
            return new UserResponse(new User("", "", "", UserRole.User), "");
        }
        
        return new UserResponse(user, TokenGenerator.GenAccessToken(user));
    }
    
    
    [Authorize]
    [GraphQLName("updatePassword")]
    public async Task<bool> UpdatePassword(AppDbContext context, ClaimsPrincipal claimsPrincipal, string oldPassword, string newPassword)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));

        User? user = await context.Users.FindAsync(userId);
        
        if (user is null)
            throw new ArgumentException("User not Found!");
        
        if (!BC.BCrypt.Verify(oldPassword, user.Password))
            throw new ArgumentException("Wrong password");
        
        if (!newPassword.IsValidPassword())
            throw new ArgumentException("Password does not meet requirements! 𒌦");
        
        string password = BC.BCrypt.HashPassword(newPassword);
        user.Password = password;
        await context.SaveChangesAsync();
        return true;
    }

    [Authorize]
    public async Task<bool> UpdateEmail(AppDbContext context, ClaimsPrincipal claimsPrincipal, string newEmail)
    {
        if (!newEmail.IsValidEmail())
            throw new ArgumentException("Invalid Email");
        
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));

        User? user = await context.Users.FindAsync(userId);
        
        if (user is null)
            throw new ArgumentException("User not Found!");
        
        user.Email = newEmail;
        await context.SaveChangesAsync();
        return true;
    }
    
    [Authorize]
    [GraphQLName("logoutUser")]
    public async Task<bool> LogoutUser(AppDbContext context, ClaimsPrincipal claimsPrincipal, [Service] IHttpContextAccessor httpContextAccessor)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FindAsync(userId);
        if (user is null)
            throw new ArgumentException("User not Found!");
        httpContextAccessor.HttpContext?.Response.Cookies.Delete("jid");
        return true;
    }
    
    [Authorize]
    [GraphQLName("addFriend")]
    public async Task<User> AddFriend(AppDbContext context, ClaimsPrincipal claimsPrincipal, string userId)
    {
        Guid id = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FindAsync(id);
        if (user is null)
            throw new UnauthorizedAccessException("User not authorized");

        User? toFriend = await context.Users.FindAsync(Guid.Parse(userId));
        if (toFriend is null)
            throw new ArgumentException("User not found");
        
        var allFriends = from user1 in context.Users
            join friend in context.Friends on user1.UserId equals friend.UserId
            join real in context.Users on friend.FriendId equals real.UserId
            where friend.UserId == id
            select real;

        bool isInValid = allFriends.Any(f => f.UserId == toFriend.UserId);
        if(isInValid)
            throw new BogusException("Bogus Binted: Already befriended");
        
        context.Friends.Add(new Friend()
        {
            UserId = user.UserId,
            FriendId = toFriend.UserId
        });
        
        await context.SaveChangesAsync();
        return toFriend;
    }
    
    [Authorize]
    [GraphQLName("removeFriend")]
    public async Task<bool> RemoveFriend(AppDbContext context, ClaimsPrincipal claimsPrincipal, string friend_Id)
    {
        Friend? friend = await context.Friends.FirstOrDefaultAsync(f => f.FriendId == Guid.Parse(friend_Id) && f.UserId == Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier)));
        if (friend is null)
            throw new ArgumentException("Not befriended with user");
        context.Friends.Remove(friend);
        await context.SaveChangesAsync();
        return true;
    }

    [Authorize]
    public async Task<bool> SendFriendRequest([Service] ITopicEventSender sender, FriendRequestPayload payload, ClaimsPrincipal claimsPrincipal, AppDbContext context)
    {
        Guid id = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        if (!await context.Users.AnyAsync(u => u.UserId == id))
            throw new AuthenticationException("Authenticated user does not exist");
        if (!await context.Users.AnyAsync(u => u.UserId == Guid.Parse(payload.ToFriedUserId)))
            throw new AggregateException("User does not exist");
        await sender.SendAsync(nameof(UserSubscription.OnAddFriend), payload);
        return true;
    }
}