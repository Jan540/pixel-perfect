using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BC = BCrypt.Net;

namespace ipt_project_cepbep.GraphQL.UserCepbep
{
    public class UserQuery
    {
        private readonly AppDbContext _context;
        public UserQuery(IConfiguration configuration)
        {
            _context = new AppDbContext(configuration);
        }
        
        [GraphQLName("users")]
        public async Task<IEnumerable<Models.User>> GetUsers()
        {
            return await Task.Run(() => _context.Users) ;
        }
    }
}