using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserResponse
{
    public UserResponse(User? user = null, string? error = null)
    {
        User = user;
        Error = error;
    }
    
    ~UserResponse()
    {
        Console.WriteLine("UserResponse disposed");
    }

    public IEnumerable<Models.User>? Users { get; }
    public Models.User? User { get; }

    public string? Error { get; }
}