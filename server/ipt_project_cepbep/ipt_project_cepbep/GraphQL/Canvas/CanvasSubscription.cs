namespace ipt_project_cepbep.GraphQL.Canvas;

[ExtendObjectType(Name = "Subscription")]
public class CanvasSubscription
{
    [Subscribe]
    public PixelChangePayload? OnPixelChange([EventMessage] PixelChangePayload payload, string canvasId)
    {
        if (payload.CanvasId == canvasId)
        {
            return payload;
        }
        return null;
    }
}