using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL
{
    public class UserQuery
    {
        private readonly AppDbContext _context;
        public UserQuery(IConfiguration configuration)
        {
            _context = new AppDbContext(configuration);
        }
        
        [GraphQLName("getAllUsers")]
        public async Task<IEnumerable<Models.User>> GetUsers()
        {
            return await Task.Run(() => _context.Users) ;
        }

        public async Task<UserResponse> LoginUser(string email, string password){
            Models.User? user = await Task.Run(() => _context.Users.FirstOrDefault(u => u.Email == email));
            if(user is not null && BC.BCrypt.Verify(password, user.Password))
            {
                return new UserResponse(user);
            }
            return new UserResponse("User not found");
        }
    }
}