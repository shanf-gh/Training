/* 
Level: 
Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/csharp
*/

using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    // Your code here
    int result = 0;  
    foreach(int value in arr) 
    {
      if(value>0){
        result += value; 
      }
    }
    return result;
  }
}

/* Top solutions analysis */

using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    return arr.Where(x => x > 0).Sum();
  }
}

// Enumerable.Where filter a sequence of values based on a preedicate
// Enumerable.Sum() computes the sum of a sequence of numeric values