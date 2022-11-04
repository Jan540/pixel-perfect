using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net;
using Path = System.IO.Path;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserMutation
{
    [GraphQLName("registerUser")]
    public async Task<UserResponse> RegisterUser(AppDbContext context, string username, string email, string password)
    {
        if (!UserValidator.IsValidEmail(email))
            return new UserResponse(error: "Invalid Email ᮯ!");

        if (!UserValidator.IsValidUsername(username))
            return new UserResponse(error: "Invalid Username 𒌥!");

        if (!UserValidator.IsValidPassword(password))
            return new UserResponse(error: "Password does not meet requirements. 𒌦");

        if (context.Users.Any(u => u.Username == username))
            return new UserResponse(error: "Username already taken!");

        if (context.Users.Any(u => u.Email == email))
            return new UserResponse(error: "Email already taken!");

        string passwordHash = await Task.Run(() => BC.BCrypt.HashPassword(password));
        var user = new User
        {
            Username = username,
            Email = email,
            Password = passwordHash
        };
        await Task.Run(() => context.Users.Add(user));

        await context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("deleteUser")]
    public async Task<UserResponse> DeleteUser(AppDbContext context, string email)
    {
        var user = await context.Users.FirstOrDefaultAsync(u =>
            string.Equals(u.Email, email, StringComparison.CurrentCultureIgnoreCase));
        if (user is null)
            return new UserResponse(error: "User not found!");

        await Task.Run(() => context.Users.Remove(user));
        await context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("loginUser")]
    public async Task<UserResponse> LoginUser(AppDbContext context, string email, string password)
    {
        User? user = await Task.Run(() => context.Users.FirstOrDefault(u => u.Email == email));
        if (user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            return new UserResponse(user);
        }

        return new UserResponse(error: "Email or password was incorrect!");
    }

    [GraphQLName("updateUsername")]
    public User? UpdateUsername(AppDbContext context, string email, string username)
    { 
        User? user = context.Users.FirstOrDefault(u => u.Email == email);

        if (user == null)
            return null;

        user.Username = username;
        user.UpdatedAt = DateTime.UtcNow;
        context.SaveChanges();
        return user;
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
}