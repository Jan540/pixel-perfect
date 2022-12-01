using System.Data;
using System.Security.Authentication;
using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using ipt_project_cepbep.Config;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL.Auth;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net;
using Path = System.IO.Path;
namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserMutation
{
    // TODO: ERROR HANDLING
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

        if (!file.ContentType!.StartsWith("image/"))
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
            throw new AuthenticationException("No refresh token found!");

        var principal = TokenGenerator.GetPrincipal(token, TokenType.Refresh);

        Guid userid = Guid.Parse(principal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FirstOrDefaultAsync(u => u.UserId == userid);
        
        if (user is null)
            throw new AuthenticationException("User does not exist!");
        
        return new UserResponse(user, TokenGenerator.GenAccessToken(user));
    }
}