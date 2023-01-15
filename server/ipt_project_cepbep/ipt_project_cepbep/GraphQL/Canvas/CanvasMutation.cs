using System.Configuration;
using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Subscriptions;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;
using ipt_project_cepbep.Components;

namespace ipt_project_cepbep.GraphQL.Canvas;

[ExtendObjectType(Name = "Mutation")]
public class CanvasMutation
{
    public async Task<bool> ChangePixelColor(PixelChangePayload payload, [Service] ITopicEventSender sender)
    {
        await sender.SendAsync(nameof(CanvasSubscription.OnPixelChange), payload);
        return true;
    }
    
    // TODO: ERROR HANDLING
    [Authorize]
    [GraphQLName("createCanvas")]
    public async Task<Canvas_Model> CreateCanvas(AppDbContext context ,ClaimsPrincipal claimsPrincipal)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        var user = await context.Users.FindAsync(userId);
        var canvas_id = Randomizer_AmongUs.RandomString(14);
        Canvas_Model canvas = new Canvas_Model()
        {
            User_id = userId,
            Canvas_id = canvas_id,
            Colors = ""
        };
        context.Canvases.Add(canvas);
        await context.SaveChangesAsync();
        return canvas;
    }
    [GraphQLName("saveCanvas")]
    public async Task<string> SaveCanvas(AppDbContext context, string canvas_id, string colors)
    {
        var canvas = await context.Canvases.FindAsync(canvas_id);
        canvas.Colors = colors;
        await context.SaveChangesAsync();
        return colors;
    }

}