/**
 * Find out the max value from 3 given numbers:
 * step1:Enter values for num1 , num2 and num3
 * step2:if(num1>num2){} do step3
 * step3:if(num1>num3){} do step4
 * step4:else print num 3 will be the max Value
 * step5:end if use in step3;
 * step6:else if(num2>num3){} step7
 * step7:print "max number is num2" else step8
 * step8:print "max number is num3"
 * step9:stop
 */

//solution 1:
let num1 = 8;
let num2 = 6;
let num3 = 10;
if (num1 > num2) {
  if (num1 > num3) {
    console.log("Max number is num1", num1);
  } else {
    console.log("Max number is num3", num3);
  }
} else {
  if (num2 > num3) {
    console.log("Max number is num2", num2);
  } else {
    console.log("Max number is num3", num3);
  }
}
