using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net;
using Microsoft.AspNetCore.Mvc;

namespace ipt_project_cepbep.GraphQL
{
    public class Query
    {
        private readonly AppDbContext _context;
        public Query(IConfiguration configuration)
        {
            _context = new AppDbContext(configuration);
        }
        
        [GraphQLName("GetAllUsers")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await Task.Run(() => _context.Users) ;
        }

        [GraphQLName("LoginUser")]
        public async Task<UserResponse> LoginUser(string email, string password){
            User? user = await Task.Run(() => _context.Users.FirstOrDefault(u => u.Email == email));
            if(user is not null && BC.BCrypt.Verify(password, user.Password))
            {
                return new UserResponse(user);
            }
            return new UserResponse("User not found");
        }
    }
}