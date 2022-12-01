namespace ipt_project_cepbep.Config;

public static class CookieConfig
{
    public static readonly CookieOptions Options = new()
    {
        HttpOnly = true,
        SameSite = SameSiteMode.Lax,
        Secure = true,
        Expires = DateTime.Now.AddDays(365)
    };
}