using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public class UserSubscription
{
    [Subscribe]
    public User OnUserUpdate([EventMessage] User user) => user;
}