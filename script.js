function clearScreen() {
    document.getElementById("result").value = "";
}
 
//display value
function display(value) {
    document.getElementById("result").value += value;
}
 
// return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}