using Newtonsoft.Json;

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
    
    //write a method that generates a two dimensional array with value "rgb(255,255,255)" and json.stringify it without newtonsoft
    public static string RandomArray(int width, int height)
    {
        string[,] array = new string[width, height];
        for (int i = 0; i < width; i++)
        {
            for (int j = 0; j < height; j++)
            {
                array[i, j] = "rgb(255,255,255)";
            }
        }
        return JsonConvert.SerializeObject(array);
    }
}       