using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserResponse
{
    public UserResponse(User user, string token)
    {
        User = user ?? throw new ArgumentNullException(nameof(user));
        Token = token ?? throw new ArgumentNullException(nameof(token));
    }

    public User User { get; set; }
    public string Token { get; set; }
}