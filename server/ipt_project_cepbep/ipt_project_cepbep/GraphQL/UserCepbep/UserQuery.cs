using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL.Auth;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL.UserCepbep
{
    public class UserQuery
    {
        [Authorize]
        public async Task<User?> GetMe(ClaimsPrincipal claimsPrincipal, AppDbContext context)
        {
            Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
            User? user = await context.Users.FindAsync(userId);

            return user;
        }

        // [Authorize(Roles = new[] { "Admin" })]
        [GraphQLName("users")]
        public IEnumerable<User> GetUsers(AppDbContext context) => context.Users;

        [GraphQLName("user")]
        public User? GetUserByEmail(AppDbContext context, string email) =>
            context.Users.FirstOrDefault(u => u.Email == email);
    }
}