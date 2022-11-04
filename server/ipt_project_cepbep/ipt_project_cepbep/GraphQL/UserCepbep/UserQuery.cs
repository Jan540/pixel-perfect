using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL.UserCepbep
{
    public class UserQuery
    {
        [GraphQLName("users")]
        public IEnumerable<User> GetUsers(AppDbContext context) => context.Users;

        [GraphQLName("user")]
        public User? GetUserByEmail(AppDbContext context, string email) =>
            context.Users.FirstOrDefault(u => u.Email == email);
    }
}