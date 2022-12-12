namespace ipt_project_cepbep.GraphQL.Canvas;

public class CanvasSubscription
{
    [Subscribe]
    public PixelChangePayload OnPixelChange([EventMessage] PixelChangePayload payload) => payload;
}