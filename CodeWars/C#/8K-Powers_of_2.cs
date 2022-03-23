/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/csharp
*/

// FAILED - Couldn't figure it out

/* Top solutions analysis */

// Top Answer:
using System.Numerics;
using System.Linq;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    return (from x in Enumerable.Range(0, n+1) select BigInteger.Pow(2, x)).ToArray();
  }
}

/*
    Enumerable.Range(0, n+1) create a sequence of integers between 0 to n+1
    the select method is applying the power method to each integer in the enumerable.range
    ToArray() is transforming that range into an array
*/

// Similar to above

using System.Linq;
using System.Numerics;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    return Enumerable.Range(0, n + 1).Select(i => BigInteger.One << i).ToArray();
  }
}

// Easier to understand for me
using System;
using System.Numerics;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    BigInteger[] result = new BigInteger[n+1];
    
    for(int i = 0; i < result.Length; i++)
    {
      result[i] = (BigInteger)Math.Pow(2,i);
    }
    
    return result;
  }
}

/*
    BigInteger is a data atype of System.Numerics that can hold large integer
    The result array is declared with n+1 because the nth value is included
    The for loop is used to get all numbers from 0 to n+1 (length of the result array)
    (BigInteger) is casting the result of Math.Pow(2,i)  
*/