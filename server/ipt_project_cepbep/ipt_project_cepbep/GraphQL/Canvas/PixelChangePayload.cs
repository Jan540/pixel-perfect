namespace ipt_project_cepbep.GraphQL.Canvas;

public class PixelChangePayload
{
    public int Row { get; set; }
    public int Col { get; set; }
    public string Color { get; set; }
    public string CanvasId { get; set; }
}