using ipt_project_cepbep.GraphQL.UserCepbep;
using Microsoft.EntityFrameworkCore;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.Models;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services
    .AddGraphQLServer()
    .AddQueryType<UserQuery>()
    .AddMutationType<UserMutation>()
    .AddSubscriptionType<UserSubscription>()
    .AddType<UploadType>()
    .AddInMemorySubscriptions();


var app = builder.Build();

app.UseWebSockets();

app.MapGraphQL();

await app.RunAsync();
