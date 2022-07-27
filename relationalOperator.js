/**
 * Write a program to output whether a number is divisible by both 2 and 3 or divisible by only one of them?
 * step1:Enter input a and b
 * step2:let a = 2 , let b = 3 , let n = 5
 * step3:if(n%a==0 && n%b==0)
 * step4:print number is divisible by 2 and 3
 * step5:if(n%a==0 || n%b==0)
 * step6:print number is divisible by 2 or 3
 */

let n = 4;
let a = 2;
let b = 3;
if (n % a == 0 && n % b == 0) {
  console.log("Number is divisible by 2 and 3");
} else if (n % a == 0 || n % b == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2 , 3");
}
