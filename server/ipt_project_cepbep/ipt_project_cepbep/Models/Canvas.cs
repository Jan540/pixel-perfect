using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;

[Table("canvas")]
public class Canvas
{
    [ForeignKey(nameof(User))]
    public Guid UserId { get; set; }
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string CanvasId { get; set; }
    public string Colors { get; set; }
    public User User { get; set; }
}