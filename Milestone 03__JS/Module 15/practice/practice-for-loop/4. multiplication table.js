/***

Generate a multiplication table for number 9

 */

/*programming hero*/

const multiplicand = 9;
for (let multiplier = 1; multiplier <= 10; multiplier++) {
  let result = multiplicand * multiplier;
  console.log(multiplicand, "×", multiplier, "=", result);
}
