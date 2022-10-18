using Bogus;
using ipt_project_cepbep.Models;
using Microsoft.EntityFrameworkCore;

namespace ipt_project_cepbep.Data;

public class UserContext : DbContext
{
    protected readonly IConfiguration Configuration;
    
    public UserContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().
            Property(u => u.CreatedAt)
            .HasDefaultValueSql("NOW() ");

        var users = new Faker<User>()
            .RuleFor(u => u.Email, f => f.Internet.Email())
            .RuleFor(u => u.Password, f => f.Internet.Password())
            .RuleFor(u => u.Username, f => f.Internet.UserName());
        
        modelBuilder.Entity<User>().HasData(users.Generate(1000));
    }

    public DbSet<User>? Users { get; set; }
}