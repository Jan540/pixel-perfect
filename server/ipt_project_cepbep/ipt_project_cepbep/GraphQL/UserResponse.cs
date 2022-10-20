using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL;

public class UserResponse
{
    public UserResponse(Models.User user)
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
    
    public UserResponse(IEnumerable<Models.User> users)
    {
        Users = users;
        User = null;
        Error = string.Empty;
    }

    ~UserResponse()
    {
        Console.WriteLine("UserResponse disposed");
    }

    public IEnumerable<Models.User>? Users { get; }
    public Models.User? User { get; }

    public string? Error { get; }
}