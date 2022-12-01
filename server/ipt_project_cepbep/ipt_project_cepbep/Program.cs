using System.Text;
using ipt_project_cepbep.Data;
using ipt_project_cepbep.GraphQL;
using ipt_project_cepbep.GraphQL.UserCepbep;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthorization();
builder.Services.AddHttpContextAccessor();

var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:AccessKey"]));

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = signingKey,
            ClockSkew = TimeSpan.Zero
        };
    });

builder.Services.AddDbContext<AppDbContext>();
builder.Services
    .AddGraphQLServer()
    .AddAuthorization()
    .AddQueryType<UserQuery>()
    .AddFiltering()
    .AddSorting()
    .AddErrorFilter<ErrorFilter>()
    .AddMutationType<UserMutation>()
    .AddMutationConventions()
    .AddSubscriptionType<UserSubscription>()
    .AddInMemorySubscriptions()
    .RegisterDbContext<AppDbContext>()
    .AddType<UploadType>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        b => b.WithOrigins("http://localhost:3000","http://localhost:5107", "https://localhost:7217" )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
}); 

var app = builder.Build();

app.UseCors("CorsPolicy");

app.UseWebSockets();

app.MapGraphQL();

app.UseAuthentication();
app.UseAuthorization();

await app.RunAsync();
