/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/csharp
*/

namespace Solution
{
  public static class Program
  {
    public static string repeatStr(int n, string s)
    {
        string str = "";
        for(int i = 0; i < n; i++){
            str += s;
        }
        return str;
    }
  }
}

/* Top solutions analysis */

namespace Solution
{
  using System;
  using System.Linq;
  public static class Program
  {
    public static string repeatStr(int n, string s)
    {
      return String.Concat(Enumerable.Repeat(s, n));
    }
  }
}

// Use of Enumerable.Repeat() to create the sequence
// Use of the String.Concat() to concatenate the sequence