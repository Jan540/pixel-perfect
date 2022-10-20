using Bogus;
using ipt_project_cepbep.GraphQL;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;
using User = ipt_project_cepbep.Models.User;

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
        modelBuilder.Entity<User>(ub =>
        {
            ub.Property(u => u.UserId)
                .HasDefaultValueSql("gen_random_uuid()");

            ub.Property(u => u.CreatedAt)
                .HasDefaultValueSql("now()");

            ub.HasIndex(u => u.Email)
                .IsUnique();
        });
        
        var users = new Faker<User>()
            .RuleFor(u => u.UserId, f => Guid.NewGuid())
            .RuleFor(u => u.Email, f => f.Internet.Email())
            .RuleFor(u => u.Password, f => f.Internet.Password())
            .RuleFor(u => u.Username, f => f.Internet.UserName());
        
        modelBuilder.Entity<User>().HasData(users.Generate(1000));
    }
    
    public DbSet<User> Users { get; set; }
}