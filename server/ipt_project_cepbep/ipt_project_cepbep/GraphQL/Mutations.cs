using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL;

public class Mutations
{
    private readonly AppDbContext _context;
    public Mutations(IConfiguration configuration)
    {
        _context = new AppDbContext(configuration);
    }
    public bool AddUser(string username, string email, string password)
    {
        string passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
        _context.Users.Add(new User
        {
            Username = username,
            Email = email,
            Password = passwordHash
        });
        _context.SaveChanges();
        return true;
    }
}