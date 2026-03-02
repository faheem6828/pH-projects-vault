

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let oddSum = 0;
let oddNum = [];
for(let o = 91; o<=129; o+=2){
    oddSum = oddSum + o;
    oddNum.push(o);
}
  console.log(oddNum);
  console.log('Sum of all the odd numbers from 91 to 129 : ', oddSum )


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let evenSum = 0;
let evenNum = [];

for (let e = 51; e <= 85; e++) {
    if (e % 2 === 0) { 
        evenSum += e;
        evenNum.push(e);
    }
}
console.log(evenNum.length, evenNum);
console.log('Sum of all the even numbers from 51 to 85 : ', evenSum);


/*programming hero*/
