using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using BCrypt.Net;

namespace ipt_project_cepbep.GraphQL
{
    public class Query
    {
        private readonly AppDbContext _context;
        public Query(IConfiguration configuration)
        {
            _context = new AppDbContext(configuration);
        }
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await Task.Run(() => _context.Users) ;
        }
        
        public User GetUser(string name, string password)
        {
            bool has = BCrypt.Net.BCrypt.Verify( password,  _context.Users.FirstOrDefault(u => u.Username == name).Password);
            if (has)
            {
                return _context.Users.FirstOrDefault(u => u.Username == name);
            }

            return new User();
        }


    }
}