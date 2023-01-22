using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ipt_project_cepbep.Models;


[Table("publicCanvas")]
public class PublicCanvas
{
    public string PublicCanvasId { get; set; }
    public string Colors { get; set; }
    
}