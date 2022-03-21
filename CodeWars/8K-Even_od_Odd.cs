/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/csharp
*/

using System;

namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      // Code goes here...
      if(number % 2 == 0)
      {
        return("Even");
      }
      else
      {
        return("Odd");
       }
    }
  }
}

/* Top solutions analysis */

using System;

namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      return number % 2 == 0 ? "Even" : "Odd";
    }
  }
}

// Use of the ternary operator to keep the code short