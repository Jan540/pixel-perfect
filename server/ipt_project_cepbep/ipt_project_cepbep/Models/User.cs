using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;

[Table("user")]
public class User : BaseModel
{
    public User()
    {
        Email = "";
        Username = "";
        Password = "";
    }
    
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid UserId { get; set; }
    public string Email { get; set; }
    public string Username { get; set; }
    [GraphQLIgnore]
    public string Password { get; set; }
}