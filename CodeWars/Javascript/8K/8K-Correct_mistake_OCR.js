/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
*/

function correct(string)
{
  let newString = string;
  newString = newString.replace(/1/g, 'I');
  newString = newString.replace(/0/g, 'O');
  newString = newString.replace(/5/g, 'S');
  return newString;
}

/* Top solutions analysis */
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')