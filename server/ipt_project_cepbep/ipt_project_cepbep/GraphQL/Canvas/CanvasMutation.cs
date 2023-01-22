using System.Configuration;
using System.Diagnostics.CodeAnalysis;
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
    [SuppressMessage("ReSharper.DPA", "DPA0006: Large number of DB commands", MessageId = "count: 108")]
    public async Task<Models.Canvas> CreateCanvas(AppDbContext context ,ClaimsPrincipal claimsPrincipal, string name)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        var canvasId = Randomizer_AmongUs.RandomString(14);
        Models.Canvas canvas = new Models.Canvas()
        {
            UserId = userId,
            CanvasId = canvasId,
            Colors = "",
            Name = name
        };
        context.Canvases.Add(canvas);
        await context.SaveChangesAsync();
        return canvas;
    }
    [GraphQLName("createPublicCanvas")]
    public async Task<Models.PublicCanvas> CreatePublicCanvas(AppDbContext context)
    {
        var canvasId = Randomizer_AmongUs.RandomString(14);
        Models.PublicCanvas canvas = new Models.PublicCanvas()
        {
            PublicCanvasId = canvasId,
            Colors = "",
        };
        context.PublicCanvases.Add(canvas);
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
    [GraphQLName("savePublicCanvas")]
    public async Task<string> SavePublicCanvas(AppDbContext context, string canvas_id, string colors)
    {
        var canvas = await context.PublicCanvases.FindAsync(canvas_id);
        canvas.Colors = colors;
        await context.SaveChangesAsync();
        return colors;
    }

}