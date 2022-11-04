using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL.UserCepbep;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>();

builder.Services
    .AddGraphQLServer()
    .AddQueryType<UserQuery>()
    .AddMutationType<UserMutation>()
    .AddSubscriptionType<UserSubscription>()
    .AddInMemorySubscriptions()
    .RegisterDbContext<AppDbContext>()
    .AddType<UploadType>()
    .AddMutationConventions();


var app = builder.Build();

app.UseWebSockets();

app.MapGraphQL();

await app.RunAsync();
