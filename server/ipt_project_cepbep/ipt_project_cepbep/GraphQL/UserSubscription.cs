using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL;

public class UserSubscription
{
    [Subscribe]
    public User OnUserCreation([EventMessage] User user) => user;
}