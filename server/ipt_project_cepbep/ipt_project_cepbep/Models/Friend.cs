using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Principal;

namespace ipt_project_cepbep.Models;

[Table("friend")]
public class Friend : BaseModel
{
    public User User1 { get; set; }
    [ForeignKey("User1")]
    public Guid UserId1 { get; set; }
    
    public User User2 { get; set; }
    [ForeignKey("User2")]
    public Guid UserId2 { get; set; }
}