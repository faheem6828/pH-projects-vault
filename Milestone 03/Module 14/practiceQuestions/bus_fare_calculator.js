/***
__________________________________________________________________________
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
__________________________________________________________________________
*/

let ticketPrice = 800;
let age = 5;

// 1. Initialize variables

let children = false;
let student = false;
let seniorCitizen = false;

// 2. Determine category

if (age < 10) {
  children = true;
} else if (age >= 60) {
  seniorCitizen = true;
} else if (age > 10 && age < 30) {
  student = true;
}

// 3. Calculate Price

if (children) {
  ticketPrice = "Free";
} else if (student) {
  ticketPrice = ticketPrice * 0.5;
} else if (seniorCitizen) {
  ticketPrice = ticketPrice * 0.15;
} else {
  ticketPrice = ticketPrice;
}
console.log(ticketPrice);
