//Creating a constant object
const emp = {
  //Object properties
  fname: "Urvashi",
  lname: "Suden",
  profile: "Intern",
  lang: "JavaScript",

  //Using getter to display full name
  get fullName() {
    return this.fname + " " + this.lname;
  },

  //Using setter to update a property
  set newProfile(value) {
    this.profile = value;
  },
};
console.log("Initial emp object \n", emp, "\n");
console.log("Displaying full name using get: ", emp.fullName, "\n");
emp.newProfile = "Web Developer";
console.log("Final emp object , updated using set\n", emp);

//DOUBT: profile can be changed directly using emp.profile = "Web Developer".Why using setter?
