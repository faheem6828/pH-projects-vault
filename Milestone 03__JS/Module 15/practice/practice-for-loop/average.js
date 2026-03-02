/* 

The maths marks of a class are: 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65. 
Now do the following:
a) Find the Total Marks.
b) Find the number of students.
c) Find the average Mark.

*/

let Mark = [81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65];
let sum = 0;
for (let i = 0; i < Mark.length; i++) {
  sum += Mark[i];
}
console.log("Total :", sum);
console.log("Number of Students :", Mark.length);
console.log("Average Mark :", sum / Mark.length);
