namespace ipt_project_cepbep.Components;

public class Randomizer_AmongUs
{
    //write a method that returns a random string, kinda like a password generator
    public static string RandomString(int length)
    {
        Random random = new Random();
        const string chars = "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM";
        
        return new string(Enumerable.Repeat(chars, length)
          .Select(s => s[random.Next(s.Length)]).ToArray());
    }
}       