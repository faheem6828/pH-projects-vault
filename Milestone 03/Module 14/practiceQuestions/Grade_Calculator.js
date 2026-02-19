/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var mark = 60;

if (mark >=90 && mark < 100){
  console.log("Grade A"); 
} else if (mark >=80 && mark < 89){
  console.log("Grade B");
} else if (mark >=70 && mark < 79){
  console.log("Grade C");
} else if (mark >=60 && mark < 69){
  console.log("Grade D");
} else {
  console.log("Grade F");
}