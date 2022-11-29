using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Subscriptions;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL.Auth;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using BC = BCrypt.Net;
using Path = System.IO.Path;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserMutation
{
    // TODO: ERROR HANDLING

    [GraphQLName("registerUser")]
    public async Task<UserResponse> RegisterUser(AppDbContext context, string username, string email, string password)
    {
        if (!email.IsValidEmail())
            return new UserResponse(error: "Invalid Email ᮯ!");

        if (!username.IsValidUsername())
            return new UserResponse(error: "Invalid Username 𒌥!");

        if (!password.IsValidPassword())
            return new UserResponse(error: "Password does not meet requirements. 𒌦");

        if (context.Users.Any(u => u.Username == username))
            return new UserResponse(error: "Username already taken!");

        if (context.Users.Any(u => u.Email == email.ToLower()))
            return new UserResponse(error: "Email already taken!");

        string passwordHash = await Task.Run(() => BC.BCrypt.HashPassword(password));
        var user = new User(email.ToLower(), username, passwordHash, UserRole.User);
        await Task.Run(() => context.Users.Add(user));

        await context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("deleteUser")]
    public async Task<UserResponse> DeleteUser(AppDbContext context, string email)
    {

        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == email.ToLower());
            //TODO: KA was da bitte falsch ist
            //string.Equals(u.Email, email, StringComparison.CurrentCultureIgnoreCase));
        
        if (user is null)
            return new UserResponse(error: "User not found!");

        await Task.Run(() => context.Users.Remove(user));
        await context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("loginUser")]
    //WAS DA KAPUTUS AMOGUS
    public async Task<string> LoginUser(AppDbContext context, [Service] IHttpContextAccessor httpContextAccessor, string email, string password)
    {
        User? user = await context.Users.FirstOrDefaultAsync(u => u.Email == email.ToLower());
        if (user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            string refreshToken = TokenGenerator.GenRefreshToken(user);
            httpContextAccessor.HttpContext?.Response.Cookies.Append("jid", refreshToken, new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Lax,
                Secure = true,
                Expires = DateTime.Now.AddDays(365)
            });
            return TokenGenerator.GenAccessToken(user);
        }

        return "very cringus";
        // return new UserResponse(error: "Email or password was incorrect!");
    }

    [GraphQLName("updateUsername")]
    public async Task<bool> UpdateUsername(AppDbContext context, [Service] ITopicEventSender sender, string email, string username)
    { 
        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == email.ToLower());

        if (user == null)
            return false;

        user.Username = username;
        // context.Entry(user).State = EntityState.Modified;
        // context.Entry(user).Property(nameof(user.UpdatedAt)).IsModified = true;
        await context.SaveChangesAsync();

        await sender.SendAsync(nameof(UserSubscription.OnUserUpdate), user);
        
        return true;
    }
    
    [GraphQLName("uploadProfilePicture")]
    public async Task<UserResponse> UploadProfilePicture(AppDbContext context, Guid userId, IFile file)
    {
        User? user = await context.Users.FindAsync(userId);
        if (user is null)
            return new UserResponse(error: "User not found");

        await using var stream = File.Create(Path.Combine("ProfilePictures", $"{userId}.png"));
        await file.CopyToAsync(stream);
        return new UserResponse(user);
    }
    
    [GraphQLName("refreshUser")]
    public async Task<string> RefreshUser(AppDbContext context, [Service] IHttpContextAccessor httpContextAccessor)
    {
        string? token = httpContextAccessor.HttpContext?.Request.Cookies["jid"];

        if (token is null)
            return "not logged in";

        var principal = TokenGenerator.GetPrincipal(token, TokenType.Refresh);
        
        if (principal is null)
            return "invalid token";

        Guid userid = Guid.Parse(principal.FindFirstValue(ClaimTypes.NameIdentifier));
        User? user = await context.Users.FirstOrDefaultAsync(u => u.UserId == userid);
        
        if (user is null)
            return "user not found";
        
        return TokenGenerator.GenAccessToken(user);
    }
}