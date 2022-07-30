/** Create a reverse pattern
 * step1:Enter input n = 5
 * step2:for(let count=0;count<n;count++) goto step3
 * step3:for(let counter=0;counter<count;counter++)
 * step4:Inside step 3 loop print new line
 * step5:End step 3 loop
 * step6:Inside step2 loop print "*" inside loop for(let result=0;result<2 * (n-count) - 1;result++)
 * step7:End step2 loop
 */

let n = 5;

for (let count = 0; count < n; count++) {
  let printStars = " ";
  for (let counter = 0; counter < count; counter++) {
    printStars += " ";
  }
  for (let result = 0; result <= 2 * (n - count) - 1; result++) {
    printStars += "*";
  }
  console.log(printStars);
}
