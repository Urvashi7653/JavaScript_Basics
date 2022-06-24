//Mapping array
const int = [2, 6, 7, 8];
const double = int.map((x) => x * 2);
console.log(double);

//Filter for simple array
const odd = int.filter((x) => x % 2);
console.log(odd);

//Filter for array of objects
const students = [
  { name: "Abc", grade: 89 },
  { name: "Pqr", grade: 95 },
  { name: "Hgf", grade: 48 },
  { name: "Mno", grade: 78 },
];
const intelligentStudents = students.filter((x) => x.grade > 85);
console.log(intelligentStudents);

//Reduce array of objects
const product = int.reduce((acc, item) => acc * item, 1);
console.log("Product of all elements of array is", product);
