using HotChocolate.Subscriptions;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net.BCrypt;

namespace ipt_project_cepbep.GraphQL;

public class UserMutation
{
    private AppDbContext _context;
    
    public UserMutation(IConfiguration configuration)
    {
        _context = new AppDbContext(configuration);
    }

    public async Task<User> RegisterUser(string email, string username, string password, [Service] ITopicEventSender sender)
    {
        string hashedPassword = await Task.Run(() => BC.HashPassword(password));
        
        var user = new User
        {
            Email = email,
            Username = username,
            Password = hashedPassword
        };
        
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
        await sender.SendAsync(nameof(UserSubscription.OnUserCreation), user);
        return user;
    }
}