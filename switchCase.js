/**
 * ABCDE are the values and click on different values gives different voice:
 * step1:Enter input value num
 * step2:switch(n) goto step3
 * step3:case1 A: print hello goto step4
 * step4:break repeat same cases with different values
 * step5:If all the statements are false print default value
 */

let n = "B";
switch (n) {
  case "A":
    console.log("hello");
    break;
  case "B":
    console.log("hola");
    break;
  case "C":
    console.log("nujh");
    break;
  case "D":
    console.log("vhji");
    break;
  case "E":
    console.log("nj");
    break;
  default:
    console.log("Wrong choice");
}

//Addition , subtraction , division and multiplication using switch statement

let a = 2;
let b = 5;
let c;
switch ("-") {
  case "+":
    c = a + b;
    console.log(`a + b = ${c}`);
    break;
  case "-":
    c = a - b;
    console.log(`a - b = ${c}`);
    break;
  case "*":
    c = a * b;
    console.log(`a * b = ${c}`);
    break;
  case "/":
    c = a / b;
    console.log(`a / b = ${c}`);
    break;
  default:
    console.log(`Wrong number`);
}
