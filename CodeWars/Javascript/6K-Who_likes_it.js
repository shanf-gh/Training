/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
*/

function likes(names) {
    let likeText = '';
    switch(names.length) {
        case 0:
          likeText = 'no one likes this';
          break;
        case 1:
          likeText = `${names[0]} likes this`;
          break;
        case 2:
          likeText = `${names[0]} and ${names[1]} like this`;
          break;
        case 3:
          likeText = `${names[0]}, ${names[1]} and ${names[2]} like this`;
          break;
        default:
          likeText = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
          break;
    }
    
    return likeText;
  }

/* Top solutions analysis */

// top solution also uses switch