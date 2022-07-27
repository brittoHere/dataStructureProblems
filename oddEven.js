/**
 * Calculate the given numbers are odd or even:
 * step1:Enter the input value num
 * step2:if(num%2===0){} print number is even else step3
 * step3:print number is odd
 * step4:stop
 */

let num = 5;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

//print all odd numbers using for loop

let number = 5;
for (let count = 0; count <= number; count++) {
  let odd;
  if (count % 2 !== 0) {
    odd = count;
    console.log(`Odd Numbers In For Loop Are ${odd}`);
  }
}

//print all odd numbers using while

let value = 10;
let count = 0;
while (count <= value) {
  count++;
  if (count % 2 !== 0) {
    console.log(`Odd Numbers In While Loop Are ${count}`);
  }
}

//print all odd numbers using do while loop

let check = 5;
let counter = 0;
do {
  counter++;
  if (counter % 2 == 0) {
    console.log(`Odd Numbers In Do While Loop Are ${counter}`);
  }
} while (counter <= check);

//print all the even numbers between 0 to 100.When number is even continue

for (let counts = 0; counts <= 100; counts++) {
  if (counts % 2 === 0) {
    continue;
  }
  console.log(`Even Numbers are ${counts}`);
}
