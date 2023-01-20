using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Principal;

namespace ipt_project_cepbep.Models;

[Table("friend")]
public class Friend : BaseModel
{
    public User User { get; set; }   
    
    [ForeignKey("User")]
    public Guid UserId { get; set; }
    
    public User ToFriend { get; set; }
    
    [ForeignKey("ToFriend")]
    public Guid FriendId { get; set; }
}