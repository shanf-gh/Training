/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/csharp
*/

using System;

public static class Kata
{
  public static string Solution(string str) 
  {
    char[] charArray = str.ToCharArray();
    Array.Reverse(charArray);
    
    return new String (charArray);
  }
}

// Solution was googled

/* Top solutions analysis */
using System;
using System.Linq;

public static class Kata
{
  public static string Solution(string str) 
  {
     return new string(str.ToArray().Reverse().ToArray());
  }
}
