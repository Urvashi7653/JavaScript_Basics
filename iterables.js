//Iterating over a string
const a = "URVASHI";
let txt = "";
for (const x of a) {
  txt += x + "\t";
}
console.log(txt);

//Iterating over an array
const b = ["HTML", "CSS", "JavaScript", "Jquery"];
let txt2 = "";
for (const y of b) {
  txt2 += y + "\t";
}
console.log(txt2);

//Iterating over a set
const c = new Set(["Express", "React"]);
let txt3 = "";
for (const z of c) {
  txt3 += z + "\t";
}
console.log(txt3);

//Iterating over a map
const d = new Map([
  ["Gaming", "C++"],
  ["Web Development", "JavaScript"],
  ["Apps", "Flutter"],
]);
txt4 = "";
for (let p of d) {
  txt4 += p + "\t";
}
console.log(txt4);
