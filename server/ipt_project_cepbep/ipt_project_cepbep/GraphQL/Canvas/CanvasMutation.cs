using HotChocolate.Subscriptions;

namespace ipt_project_cepbep.GraphQL.Canvas;

[ExtendObjectType(Name = "Mutation")]
public class CanvasMutation
{
    public async Task<bool> ChangePixelColor(PixelChangePayload payload, [Service] ITopicEventSender sender)
    {
        await sender.SendAsync(nameof(CanvasSubscription.OnPixelChange), payload);
        return true;
    }
}