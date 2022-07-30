/** Print Butterfly Pattern
 * step1:Enter var space = 2 * N - 1 , N = 5 and printNumber = ""
 * step2:Enter var star = 0
 * step3:Use for loop
 * step4:Use for loop for space and to print star
 * step5:Use for loop for print start specialcase
 */

let printStar = "";
function butterflyPattern(N) {
  for (let count = 1; count <= N; count++) {
    for (let starCount = 1; starCount <= count; starCount++) {
      printStar += "*";
    }
    let space = 2 * N - 2 * count;
    for (let spaceCount = 1; spaceCount <= space; spaceCount++) {
      printStar += " ";
    }
    for (let starCount = 1; starCount <= count; starCount++) {
      printStar += "*";
    }
    console.log(printStar);
  }
  for (let count = N; count >= 1; count--) {
    for (let starCount = 1; starCount <= count; starCount++) {
      printStar += "*";
    }
    let space = 2 * N - 2 * count;
    for (let spaceCount = 1; spaceCount <= space; spaceCount++) {
      printStar += " ";
    }
    for (let starCount = 1; starCount <= count; starCount++) {
      printStar += "*";
    }
    console.log(printStar);
  }
}

butterflyPattern(3);
