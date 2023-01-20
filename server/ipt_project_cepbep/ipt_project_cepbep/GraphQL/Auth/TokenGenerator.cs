using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using ipt_project_cepbep.Models;
using Microsoft.IdentityModel.Tokens;

namespace ipt_project_cepbep.GraphQL.Auth;

/// <summary>
/// Static Class for generating JWT tokens
/// </summary>
public static class TokenGenerator
{
    private static readonly IConfiguration Configuration = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .Build();
    
    private static readonly string Issuer = Configuration["Jwt:Issuer"] ?? throw new ConfigurationErrorsException();
    private static readonly string Audience = Configuration["Jwt:Audience"] ?? throw new ConfigurationErrorsException();
    private static readonly string AccessKey = Configuration["Jwt:AccessKey"] ?? throw new ConfigurationErrorsException();
    private static readonly string RefreshKey = Configuration["Jwt:RefreshKey"] ?? throw new ConfigurationErrorsException();
    
    private static readonly int AccessTokenExpiration = 500; // minutes
    private static readonly int RefreshTokenExpiration = 365; // days

    /// <summary>
    /// Generate a new access token for a user.
    /// </summary>
    /// <param name="user">User to generate the token for</param>
    /// <returns>Access Token</returns>
    public static string GenAccessToken(User user) {
        List<Claim> claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
            new Claim(ClaimTypes.Role, user.Role.ToString())
        };

        var token = new JwtSecurityToken(
            Issuer,
            Audience,
            claims,
            expires: DateTime.Now.AddMinutes(AccessTokenExpiration),
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AccessKey)), 
                SecurityAlgorithms.HmacSha256));
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    /// <summary>
    /// Generates a new refresh token for a user.
    /// </summary>
    /// <param name="user">User to generate the token for</param>
    /// <returns>Refresh Token</returns>
    public static string GenRefreshToken(User user)
    {
        List<Claim> claims = new List<Claim>()
        {
            new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString())
        };
        
        var token = new JwtSecurityToken(
            Issuer,
            Audience,
            claims,
            expires: DateTime.Now.AddDays(RefreshTokenExpiration),
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(RefreshKey)), SecurityAlgorithms.HmacSha256));

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    /// <summary>
    /// Get Principal from a JWT.
    /// </summary>
    /// <param name="token">The JWT</param>
    /// <param name="type">If JWT is a Access or Refresh token</param>
    /// <returns></returns>
    public static ClaimsPrincipal GetPrincipal(string token, TokenType type)
    {
        string key = type == TokenType.Access ? AccessKey : RefreshKey;

        var tokenHandler = new JwtSecurityTokenHandler();
        var validationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
            ValidateIssuer = true,
            ValidIssuer = Issuer,
            ValidateAudience = true,
            ValidAudience = Audience,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };

        try
        {
            var principal = tokenHandler.ValidateToken(token, validationParameters, out _);
            return principal;
        }
        catch
        {
            throw new SecurityTokenException("Invalid token");
        }
    }
}