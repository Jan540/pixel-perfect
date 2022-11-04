using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net;
using Path = System.IO.Path;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserMutation
{

    [GraphQLName("registerUser")]
    public async Task<UserResponse> RegisterUser(AppDbContext context ,string username, string email, string password)
    {
        if (context.Users.Any(u => u.Email == email)) 
            return new UserResponse("User already exists");
        string passwordHash = await Task.Run(() => BC.BCrypt.HashPassword(password));
        var user = new User
        {
            Username = username,
            Email = email,
            Password = passwordHash,
        };
        await Task.Run(() => context.Users.Add(user));
        
        await context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("deleteUser")]
    public async Task<UserResponse> DeleteUser(AppDbContext context ,string email, string password)
    {
        var user = context.Users.FirstOrDefault(u => string.Equals(u.Email, email, StringComparison.CurrentCultureIgnoreCase));
        if (user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            await Task.Run(() => context.Users.Remove(user));
            await context.SaveChangesAsync();
            return new UserResponse(user);
        } 
        return new UserResponse("Email or password was incorrect");
    }
    
    [GraphQLName("loginUser")]
    public async Task<UserResponse> LoginUser(AppDbContext context ,string email, string password){
        User? user = await Task.Run(() => context.Users.FirstOrDefault(u => u.Email == email));
        if(user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            return new UserResponse(user);
        }
        return new UserResponse("Email or password was incorrect");
    }

    public async Task<UserResponse> UploadProfilePicture(AppDbContext context, Guid userId, IFile file)
    {
        User? user = await context.Users.FindAsync(userId);
        if (user is null)
            return new UserResponse("User not found");
        
        await using var stream = File.Create(Path.Combine("ProfilePictures", $"{userId}.png"));
        await file.CopyToAsync(stream);
        return new UserResponse(user);
    }
}