/** Create a hollow rectangle pattern
 * step1:Initialize input = 5
 * step2:print top line and bottom line filled with stars console.log('*'.repeat(input))
 * step3:print middle line for(let i=1;i<input-1;i++){}
 * step4:inside for loop  console.log("*" + ' '.repeat(input-2) + "*")
 */

let input = 5;
console.log("*".repeat(input));
for (let i = 1; i < input; i++) {
  console.log("*" + " ".repeat(input - 2) + "*");
}
console.log("*".repeat(input));
