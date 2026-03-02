// Normal conditional statement
let price = 500;
isLeader = true;
if (isLeader === false) {
  price = 500;
} else {
  price = 0;
}
console.log(price);

// ternery operator

price2 = isLeader === false ? 500 : 0;
console.log(price2);

// Nested ternary operator
// if the bell rang, i will wake up or i won't. if the bell rang and if its not sunday, i will wake up else i won't.

let bell = true;
let isSunday = false;

if (bell === true) {
  if (isSunday === true) {
    console.log("I will wake up");
  } else {
    console.log("I won't wake up.");
  }
} else {
  console.log("I won't crake up.");
}

// ternery version:

bell === true
  ? isSunday === true
    ? console.log("I will wake up")
    : console.log("I won't wake up.")
  : console.log("I won't crake up.");
