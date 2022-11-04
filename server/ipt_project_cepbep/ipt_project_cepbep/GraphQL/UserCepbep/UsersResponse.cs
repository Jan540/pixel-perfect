using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UsersResponse
{
    public UsersResponse(string error = "202")
    {
        Error = error;
        Users = null;
    }

    public UsersResponse(IEnumerable<User>? users = null)
    {
        Users = users;
        Error = "202";
    }
    
    ~UsersResponse()
    {
        Console.WriteLine("UsersResponse disposed");
    }
    
    public string Error { get; }
    public IEnumerable<User>? Users { get; }
}