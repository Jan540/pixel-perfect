namespace ipt_project_cepbep.Config;

public static class CookieConfig
{
    public static readonly CookieOptions Options = new()
    {
        HttpOnly = true,
        SameSite = SameSiteMode.Lax,
        Secure = false,
        IsEssential = true,
        Expires = DateTime.Now.AddDays(365),
        Domain = "10.0.0.14",
        Path = "/",
    };
}