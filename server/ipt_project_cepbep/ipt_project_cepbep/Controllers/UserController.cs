using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;

namespace ipt_project_cepbep.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private AppDbContext _context;

    public UserController(IConfiguration configuration)
    {
        _context = new AppDbContext(configuration);
    }

    [HttpGet("{username}")]
    public IEnumerable<User> GetUser(string username)
    {
        return _context.Users.Where(u => u.Username.ToLower() == username.ToLower());
    }

    [HttpPost]
    public void AddUser(User user)
    {
        _context.AddUser(user);
    }

    [HttpDelete]
    public void RemoveUser(string username, string password)
    {
        _context.RemoveUser(username, password);
    }
}