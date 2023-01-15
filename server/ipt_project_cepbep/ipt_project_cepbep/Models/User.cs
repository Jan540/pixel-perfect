using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;

[Table("user")]
public class User : BaseModel
{
    public User(string email, string username, string password, UserRole role)
    {
        Email = email ?? throw new ArgumentNullException(nameof(email));
        Username = username ?? throw new ArgumentNullException(nameof(username));
        Password = password ?? throw new ArgumentNullException(nameof(password));
        Role = role;
    }

    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid UserId { get; set; }
    public string Email { get; set; }
    public string Username { get; set; }
    public UserRole Role { get; set; }
    

    [GraphQLIgnore]
    public string Password { get; set; }
    
    
}