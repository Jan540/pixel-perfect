using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using ipt_project_cepbep.Config;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep
{
    [ExtendObjectType(name: "Query")]
    public class UserQuery
    {
        [Authorize]
        public async Task<User?> GetMe(ClaimsPrincipal claimsPrincipal, AppDbContext context)
        {
            Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
            User? user = await context.Users.FindAsync(userId);

            return user;
        }

        [UsePaging]
        [UseFiltering]
        [UseSorting]
        [GraphQLName("users")]
        public IEnumerable<User> GetUsers(AppDbContext context)
        {
            var users = context.Users;
            return users;
        }

        [GraphQLName("user")]
        public IQueryable<User> GetUserByEmail(AppDbContext context, string email) =>
            context.Users.Where(u => u.Email == email);

        [GraphQLName("cookie")]
        public bool GetCookie([Service] IHttpContextAccessor httpContextAccessor)
        {
            if (httpContextAccessor.HttpContext != null)
            {
                httpContextAccessor.HttpContext.Response.Cookies.Append("test", "test", CookieConfig.Options);
                return true;
            }

            return false;
        }
    }
}