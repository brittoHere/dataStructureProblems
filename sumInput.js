/**
 * step1:Enter first and second input Value
 * step2:Calculate sum of two inputs
 * step3:Click on button display sum of two Numbers
 */
function finalResult() {
  let inp1 = document.getElementById("input1").value;
  let inp2 = document.getElementById("input2").value;
  let result = parseInt(inp1) + parseInt(inp2);
  document.getElementById("result").innerHTML = result;
}
