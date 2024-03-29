using Bogus;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using ipt_project_cepbep.Components;
using Randomizer = Bogus.Randomizer;

namespace ipt_project_cepbep.Data;

public class AppDbContext : DbContext
{
    protected readonly IConfiguration Configuration;
    
    public AppDbContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Friend>(ub =>
        {
            ub.Property(u => u.CreatedAt)
                .HasDefaultValueSql("now()");
            ub.HasKey(k => new { k.UserId1, k.UserId2 });
        });
        
        modelBuilder.Entity<User>(ub =>
        {
            ub.Property(u => u.UserId)
                .HasDefaultValueSql("gen_random_uuid()");

            ub.Property(u => u.CreatedAt)
                .HasDefaultValueSql("now()");

            ub.HasIndex(u => u.Email)
                .IsUnique();

            ub.HasIndex(u => u.Username)
                .IsUnique();
            
        });

        modelBuilder.Entity<Friend_Request>(ub =>
            {
                ub.Property(u => u.CreatedAt)
                    .HasDefaultValueSql("now()");
                ub.HasKey(k => new { k.ReceiverId, k.SenderId });
            });
        
        var users = new Faker<User>()
            .RuleFor(u => u.UserId, f => Guid.NewGuid())
            .RuleFor(u => u.Email, f => f.Internet.Email())
            .RuleFor(u => u.Password, f => f.Internet.Password())
            .RuleFor(u => u.Username, f => f.Internet.UserName())
            .RuleFor(u => u.Role, f => f.PickRandom( UserRole.User, UserRole.PremiumUser ))
            .RuleFor(u => u.UpdatedAt, f => DateTime.UtcNow);

        // TODO: muss auskommentiert sein aus irgendeinem Grund
        modelBuilder.Entity<User>().HasData(users.Generate(100));
        
        /*
        modelBuilder.Entity<PublicCanvas>(ub =>
        {
            ub.Property(u => u.PublicCanvasId)
                .HasDefaultValue("publicCanvas");
        });
        */
        
        PublicCanvas sussyCanvas = new PublicCanvas()
        {
            PublicCanvasId = "publicCanvas",
            Colors = Randomizer_AmongUs.RandomArray(100, 100)
        };
        
        
        modelBuilder.Entity<PublicCanvas>().HasData(sussyCanvas);
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Friend> Friends { get; set; }
    public DbSet<Canvas> Canvases { get; set; }
    public DbSet<Friend_Request> FriendRequests { get; set; }
    public DbSet<PublicCanvas> PublicCanvases { get; set; }
    
}