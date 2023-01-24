using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;

[Table("friend_request")]
public class Friend_Request : BaseModel
{
    public User SenderUser { get; set; }
    [ForeignKey(nameof(SenderUser))]
    public Guid SenderId { get; set; }

    public User ReceiveUser { get; set; }
    [ForeignKey(nameof(ReceiveUser))]
    public Guid ReceiverId { get; set; }

}