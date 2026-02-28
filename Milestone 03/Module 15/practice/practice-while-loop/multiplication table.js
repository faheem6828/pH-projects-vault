/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */
/*programming hero*/

/* 5 × 2 = 10
5 = multiplicand
2 = multiplicator
10 = result/ product
*/
const multiplicand = 5;
let multiplicator = 0;

while (multiplicator <= 10) {
  let result = multiplicand * multiplicator;
  console.log(multiplicand, "×", multiplicator, "=", result);
  multiplicator++;
}
