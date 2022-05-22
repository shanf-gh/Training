/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
*/

function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3 ) / 3;
    let grade = "";
    
    if(score < 60) {
      grade = "F";
    } else if (score < 70) {
      grade = "D";
    } else if (score < 80) {
      grade = "C";
    } else if (score < 90) {
      grade = "B";
    } else {
      grade = "A";
    }
    
    return grade;
  }

/* Top solutions analysis */
