/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/csharp
*/

using System;

public static class Kata
{
  public static int MakeNegative(int number)
  {
    return number > 0 ? -number : number;
  }
}

/* Top solutions analysis */
using System;

public static class Kata
{
  public static int MakeNegative(int number)
  {
    return -Math.Abs(number);
  }
}

// Use of Math.Abs() to abstract the number even if it is negative