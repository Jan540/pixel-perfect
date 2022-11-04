using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserResponse
{
    public UserResponse(string error = "202", IEnumerable<User>? users = null)
    {
        Error = error;
        User = null;
    }
    public UserResponse(User? user = null)
    {
        User = user;
        Error = "202";
    }

    ~UserResponse()
    {
        Console.WriteLine("UserResponse disposed");
    }

    public User? User { get; }

    public string Error { get; }
}