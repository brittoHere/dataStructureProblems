/** Print pyramid with 180 degree rotation
 * step1:Enter an input n
 * step2:for(let count=1;count<=n;count++){}
 * step3:for(let counter=1;counter<=n;counter++){}
 * step4:if(counter<=count) print space
 * step5:else print "*"
 */

let n = 5;
let printStars = "";
for (let count = 1; count <= n; count++) {
  for (let counter = 1; counter <= n; counter++) {
    if (counter <= n - 1) {
      printStars += " ";
    } else {
      printStars += "*";
    }
  }
  console.log(printStars);
}
