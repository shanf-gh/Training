/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript
*/

function validParentheses(parens) {
  
    let openedParenthesis = 0;
    let closedParenthesis = 0;
    
    parens.split('').forEach(x => {
      if(x === '(') {
        openedParenthesis++;
      } else if (openedParenthesis > 0 && x === ')') {
        openedParenthesis--;
      } else if (x === ')') {
        closedParenthesis++;
      }
    });
    
    return openedParenthesis === 0 && closedParenthesis === 0;
}

/* Top solutions analysis */
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

// Using only one variable. Accounting for cases when there are more closing parenthesis than opening. returning false straighaway if it is the case.
// making sure that n is 0. If it isn't there are more opening parenthesis than closing.
// if there are more closing parenthesis n will be negative and will either return false within the foor loop or at the last return if the extra closing parenthesis was last in the string