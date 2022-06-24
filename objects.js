//Creating a constant object
const emp = {
  //Object properties
  fname: "Urvashi",
  lname: "Suden",
  profile: "Intern",
  lang: "JavaScript",

  //Object method
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

//Displaying object properties and methods in loop
let txt = "Object properties and methods are displayed using for .. in loop\n";
for (let i in emp) {
  txt += emp[i] + "\n";
}

console.log(txt);

//Converting object into array using Object.values
const empArray = Object.values(emp);
console.log(
  "\n\nObject is converted to an array now using Object.values() \n",
  empArray
);
