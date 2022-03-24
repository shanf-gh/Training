/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/56747fd5cb988479af000028
*/

function getMiddle(s)
{
  let len = s.length;
  if(len === 1) {
    return s;
  } else if (len%2===0) {
    return s.slice(len/2-1, len/2+1);
  } else {
    return s[Math.ceil(len/2-1)];
  }
}

/* Top solutions analysis */

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// substring method has a start and length argument while splice has start and end arguments