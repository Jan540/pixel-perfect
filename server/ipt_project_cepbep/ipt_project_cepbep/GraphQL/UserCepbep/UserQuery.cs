using System.Runtime.InteropServices;
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
                    u.Username.ToLower().Contains(filter));
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
            var friends1 = from user1 in context.Users
                join friend in context.Friends on user1.UserId equals friend.UserId1
                join realFriends in context.Users on friend.UserId2 equals realFriends.UserId
                where friend.UserId1 == userId
                select realFriends;
            
            var friends2 = from user2 in context.Users
                join friend in context.Friends on user2.UserId equals friend.UserId2
                join realFriends in context.Users on friend.UserId1 equals realFriends.UserId
                where friend.UserId2 == userId
                select realFriends;
            List<User> fren = friends1.Concat(friends2).ToList();
            return fren;
        }

        [Authorize]
        [GraphQLName("getFriendRequests")]
        public IEnumerable<User> GetFriendRequests(ClaimsPrincipal claimsPrincipal, AppDbContext context)
        {
            Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
            var allRequests = from thisUser in context.Users
                join requests in context.FriendRequests on thisUser.UserId equals requests.ReceiverId
                join sentUser in context.Users on requests.SenderId equals sentUser.UserId
                where requests.ReceiverId == userId
                select sentUser;

            List<User> receivedFriends = allRequests.ToList();
            return receivedFriends;
        }

        [Authorize]
        [GraphQLName("isBefriended")]
        public async Task<bool> IsBefriended(ClaimsPrincipal claimsPrincipal, AppDbContext context, string friendId)
        {
            Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
            return await context.Friends.AnyAsync(fr =>
                (fr.UserId1 == Guid.Parse(friendId) && fr.UserId2 == userId)
                || (fr.UserId1 == userId && fr.UserId2 == Guid.Parse(friendId)));
        }
    }
}