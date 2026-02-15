var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;


var subjects = [Mathematics, Biology, Chemistry, Physics, Bangla];
var subjectCount = subjects.length; 

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var avg = totalMarks / subjectCount;

console.log(avg.toFixed(2));