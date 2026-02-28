/***

Implement a countdown timer that counts down from 81 to 65.

 */

/*programming hero*/

arr = [];
sum = 0;
for (let i = 81; i >= 65; i--) {
  console.log(i);
  sum += i;
  arr.push(i);
}
console.log(arr);
console.log("the sum of the numbers:", sum);
