using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL;

public class UserResponse
{
    public UserResponse(User user)
    {
        User = user;
        Users = null;
        Error = String.Empty;
    }

    public UserResponse(string error)
    {
        Error = error;
        Users = null;
        User = null;
    }
    
    public UserResponse(IEnumerable<User> users)
    {
        Users = users;
        User = null;
        Error = string.Empty;
    }

    ~UserResponse()
    {
        Console.WriteLine("UserResponse disposed");
    }

    public IEnumerable<User>? Users { get; }
    public User? User { get; }

    public string? Error { get; }
}