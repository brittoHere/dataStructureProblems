/** Print floyds triangle
 * step1:Enter variable initial , totalNumber and str = ""
 * step2:for(let count=0;count<=totalNumber;count++){} goto step3
 * step3:str = "" and counter = 0 goto step4
 * step4:while(counter<=count) goto step5
 * step5:str = str + " " + initial goto step6
 * step6:counter++ goto step7
 * step7:initial++ end while loop goto step 8
 * step8:print str
 */

let initial = 1;
let totalNumber = 5;
let str = "";
for (let count = 0; count <= totalNumber; count++) {
  str = "";
  counter = 0;
  while (counter <= count) {
    str = str + " " + initial;
    counter++;
    initial++;
  }
  console.log(str);
}
