//Function declaration
function add(a, b) {
  console.log(`Sum of ${a} and ${b} is`, a + b);
}

//function expression
const multiply = function (a, b) {
  console.log(`Product of ${a} and ${b} is`, a * b);
};

//Arrow function
const divide = (a, b) => console.log(`Division of ${a} and ${b} gives `, a / b);

//self invoking functions
(function () {
  console.log("Welcome to calculator app");
})();

//function hoisting
minus(12, 2);

function minus(a, b) {
  console.log(`Difference of ${a} and ${b} is`, a - b);
}

//Default parameters
function max(a, b, c, d, e = 100) {
  let m = -Infinity;

  //default parameters are not counted in arguments.length
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > m) m = arguments[i];
  }
  m = e > m ? e : m;
  console.log("Maximum number is :", m);
}

//Invoking functions
add(10, 12);
multiply(23, 13);
divide(36, 9);
max(23, 45, 89, 10);
