using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserSubscription
{
    [Subscribe]
    public User OnUserCreation([EventMessage] Models.User user) => user;
}