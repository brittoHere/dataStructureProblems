/** Create a rectangle pattern
 * step1:Intitialize variable starToDisplay
 * step2:for(count=0;count<4;count++) end Loop
 * step3:for(counter=1;counter<count;counter++) end loop
 * step4:starToDisplay += " " + "*" + " " end loop in step3
 * step5:starToDisplay += "\n"
 */

let starToDisplay = "";
for (let count = 0; count < 5; count++) {
  for (let counter = 0; counter < 4; counter++) {
    starToDisplay += " " + "*" + " ";
  }
  starToDisplay += "\n";
}
console.log(starToDisplay);
