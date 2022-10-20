using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using Microsoft.AspNetCore.Mvc;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserMutation
{
    private readonly AppDbContext _context;
    public UserMutation(IConfiguration configuration)
    {
        _context = new AppDbContext(configuration);
    }

    [GraphQLName("registerUser")]
    public async Task<UserResponse> RegisterUser(string username, string email, string password)
    {
        if (_context.Users.Any(u => u.Email == email)) 
            return new UserResponse("User already exists");
        string passwordHash = await Task.Run(() => BC.BCrypt.HashPassword(password));
        var user = new Models.User
        {
            Username = username,
            Email = email,
            Password = passwordHash
        };
        await Task.Run(() => _context.Users.Add(user));
            
        await _context.SaveChangesAsync();
        return new UserResponse(user);
    }

    [GraphQLName("deleteUser")]
    public async Task<UserResponse> DeleteUser(string email)
    {
        var user = _context.Users.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
        if (user is null)
            return new UserResponse("User not found");

        await Task.Run(() => _context.Users.Remove(user));
        await _context.SaveChangesAsync();
        return new UserResponse(user);
    }
    
    [GraphQLName("loginUser")]
    public async Task<UserResponse> LoginUser(string email, string password){
        User? user = await Task.Run(() => _context.Users.FirstOrDefault(u => u.Email == email));
        if(user is not null && BC.BCrypt.Verify(password, user.Password))
        {
            return new UserResponse(user);
        }
        return new UserResponse("User not found");
    }
}