using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data.Filters.Expressions;
using ipt_project_cepbep.Config;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;

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

        [GraphQLName("usersFiltered")]
        public IEnumerable<User> GetFilteredUsers(AppDbContext context, string usernameFilter)
        {
            string filter = usernameFilter.ToLower().Trim();
            if (string.IsNullOrEmpty(filter))
                return new List<User>();

            IQueryable<User> users;

            if (filter.Length == 1)
                users = context.Users.Where(u => u.Username.ToLower().StartsWith(filter));
            else
            {
                users = context.Users.Where(u =>
                    u.Username.ToLower().Contains(filter) ||
                    u.Username.ToLower().StartsWith(filter) ||
                    u.Username.EndsWith(filter));
            }
            users = users.OrderBy(u => u.Username);
            return users;

        }

        [UsePaging]
        [UseFiltering]
        [UseSorting]
        [GraphQLName("users")]
        public IEnumerable<User> GetUsers(AppDbContext context) => context.Users;

        [GraphQLName("userByEmail")]
        public IQueryable<User> GetUserByEmail(AppDbContext context, string email) =>
            context.Users.Where(u => u.Email == email);

        [GraphQLName("userById")]
        public async Task<User> GetUserById(AppDbContext context, string userId)
        {
            User? user = await context.Users.FindAsync(Guid.Parse(userId));
            return user ?? new User();
        }
        
        [Authorize]
        [UsePaging]
        [GraphQLName("getFriends")]
        public IEnumerable<User> GetFriends(ClaimsPrincipal claimsPrincipal, AppDbContext context)
        {
            
            Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
            var allFriends = from user1 in context.Users
                join friend in context.Friends on user1.UserId equals friend.UserId
                join real in context.Users on friend.FriendId equals real.UserId
                where friend.UserId == userId
                select real;
            
            List<User> fren = allFriends.Select(u => u).ToList();
            return fren;
        }
    }
}