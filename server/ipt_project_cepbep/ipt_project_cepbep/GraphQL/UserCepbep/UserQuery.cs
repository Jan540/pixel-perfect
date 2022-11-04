using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL.UserCepbep
{
    public class UserQuery
    {

        [GraphQLName("users")]
        public async Task<IEnumerable<Models.User>> GetUsers(AppDbContext context)
        {
            return await Task.Run(() => context.Users) ;
        }
    }
}