using System.Security.Claims;
using HotChocolate.AspNetCore.Authorization;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.Canvas;


[ExtendObjectType(name: "Query")]
public class CanvasQuery
{
    [Authorize]
    [GraphQLName("getCanvas")]
    public async Task<List<Models.Canvas>> GetCanvas(AppDbContext context, ClaimsPrincipal claimsPrincipal)
    {
        Guid userId = Guid.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier));
        var user = await context.Users.FindAsync(userId);
        List<Models.Canvas> canvasList = context.Canvases.Where(x => x.UserId == userId).ToList();
        return canvasList;
    }

    [GraphQLName("loadCanvas")]
    public async Task<string> LoadCanvas(AppDbContext context, string canvas_id)
    {
        var canvas = await context.Canvases.FindAsync(canvas_id);
        return canvas.Colors;
    }
    // write a LoadCanvas method that takes in a canvas id and returns the canvas
    [GraphQLName("loadPublicCanvas")]
    public async Task<string> LoadPublicCanvas(AppDbContext context, string canvas_id)
    {
        var canvas = await context.PublicCanvases.FindAsync(canvas_id);
        return canvas.Colors;
    }
}