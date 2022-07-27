/**
 * Print all the numbers that are not divisible by 3:
 * step1:Use loop for(let count=0; count<=100; count++){} do step2
 * step2:if(count%3===0){} break the loop
 * step3:else print those numbers and continue
 */

for (let count = 0; count <= 100; count++) {
  if (count % 3 === 0) {
    continue;
  }
  console.log(`Counter is ${count}`);
}
