/**Print All Prime Numbers:
 * step1:start
 * step2:Enter an input variable n
 * step3:while(number<=n){} do
 * Enter an input div = 2
 * while(div<number){} do
 * if(number%div===0) do
 * number = number + 1 else do
 * div = div + 1
 * end while
 * print "list of prime numbers " , number
 * number = number + 1
 * step4:stop
 */

let n = 11;
let number = 2;
while (number <= n) {
  let div = 2;
  while (div < number) {
    if (number % div === 0) {
      number = number + 1;
    } else {
      div = div + 1;
    }
  }
  console.log(`List of prime numbers ${number}`);
  number = number + 1;
}

//print all prime numbers using for Loop

let newNumber = 11;
let staticNumber = 2;
for (let count = 0; count <= newNumber; count++) {
  let counter;
  for (counter = 2; counter < count; counter++) {
    if (count % counter === 0) {
      break;
    }
  }
  if (counter === count) {
    console.log(`List of prime numbers in nested if ${count}`);
  }
}
