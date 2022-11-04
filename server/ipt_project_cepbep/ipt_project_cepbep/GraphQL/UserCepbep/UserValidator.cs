using System.Net.Mail;
using System.Text.RegularExpressions;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

public static class UserValidator
{
    public static bool IsValidUsername(string username)
    {
        if (String.IsNullOrEmpty(username))
            return false;
        
        Regex rx = new Regex("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$");
        
        return rx.IsMatch(username);
    }

    public static bool IsValidEmail(string email)
    {
        if (String.IsNullOrEmpty(email))
            return false;

        Regex rx = new Regex(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
        
        return rx.IsMatch(email);
    }
    
    public static bool IsValidPassword(string password)
    {
        if (String.IsNullOrEmpty(password))
            return false;
        
        Regex rx = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
        
        return rx.IsMatch(password);
    }
}