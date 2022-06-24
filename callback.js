function calculate(x, y, callbackFunc) {
  let product = x * y;
  callbackFunc(product);
}

function showResult(result) {
  console.log("Product of two numbers is :", result);
}

//Passing function name as a parameter
calculate(5, 8, showResult);

//Passing whole function in setTimeout
setTimeout(function () {
  console.log("5 seconds over!!");
}, 5000);

//Using setInterval
function time() {
  const d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
setInterval(time, 1000);
