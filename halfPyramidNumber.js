/** Half pyramid with number
 * step1:Enter a variable and assign a string symbol to printNumber
 * step2:for(let count = 0;count<=5;count++){} do step3
 * step3:Enter a variable str1 and str2 inside step2 loop
 * step4:printNumber += counter end step3 for loop goto step5
 * step5:printNumber += "\n"
 */

let printNumber = "";
for (let count = 1; count <= 5; count++) {
  for (let counter = 1; counter <= count; counter++) {
    printNumber += `${count}`;
  }
  printNumber += "\n";
}
console.log(printNumber);
