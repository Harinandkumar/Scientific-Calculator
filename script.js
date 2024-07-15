var result = document.getElementById("result");
function display(number) {
  result.value += number;
}
function calculation() {
  var finallyNumber = result.value;
  var finallyresult = eval(finallyNumber);
  result.value = finallyresult;
}
function ac() {
  result.value = "";
}
function del() {
  result.value = result.value.slice(0, -1);
}
// scientific
function sqrt() {
  try {
    result.value = Math.sqrt(eval(result.value));
  } catch (e) {
    result.value = "Error";
  }
}
function pow() {
  result.value += "**";
}
