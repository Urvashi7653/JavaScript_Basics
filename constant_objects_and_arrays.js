//Creating a constant array
const arr = ["BMW", "Toyota", "Maruti"];
console.log("Constant array", arr);

//Changing element of constant array
arr[0] = "Volvo";

//Adding element to constant array
arr.push("Lambhorgini");
console.log("We changed a constant array", arr);

//Creating a constant object
const emp = {
  //Object properties
  fname: "Urvashi",
  lname: "Suden",
  profile: "Intern",

  //Object method
  fullname: function () {
    return this.fname + " " + this.lname;
  }
};

console.log("Constant object\n", emp);

//We can add new properties to object
emp.lang = "JavaScript";

//We can also change properties of object
emp["profile"] = "Software developer";
console.log("We changed a constant object\n", emp);
