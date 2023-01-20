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
    public async Task<Models.Canvas> CreateCanvas(AppDbContext context ,ClaimsPrincipal claimsPrincipal)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        var user = await context.Users.FindAsync(userId);
        var canvasId = Randomizer_AmongUs.RandomString(14);
        Models.Canvas canvas = new Models.Canvas()
        {
            UserId = userId,
            CanvasId = canvasId,
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