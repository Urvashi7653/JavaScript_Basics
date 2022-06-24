//Pass by value of reference values
const person = {
  fname: "Ashu",
  age: 18,
};

function increaseAge(obj) {
  obj.age += 1;
  obj.fname = "Kiran";

  //reference another object
  obj = { fname: "Urvashi", age: 20 };
}

increaseAge(person);
console.log(person);

//Pass by value of primitive values
function cube(x) {
  return x * x * x;
}

let y = 10;
console.log(cube(y));
console.log(y);
