using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;

[Table("canvas")]
public class Canvas_Model
{

    [ForeignKey("User")]
    public Guid User_id { get; set; }
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Canvas_id { get; set; }
    public string[,] Colors { get; set; }
    public User User { get; set; }
    
    
    
}