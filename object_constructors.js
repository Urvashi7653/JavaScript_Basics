//Constructor function for Employee objects
function Employee(fname, lname, id, dateOfJoin) {
  //adding property
  this.nameOfEmp = fname;
  this.surName = lname;
  this.idOfEmp = id;
  this.DOJ = dateOfJoin;

  //adding method
  this.fullInfo = function () {
    return this.nameOfEmp + " (Emp Id:" + id + ")" + " joined on " + this.DOJ;
  };
}

//Creating to employee objects
const Urvashi = new Employee(
  "Urvashi",
  "Suden",
  "Soft102",
  new Date("2022-06-16")
);
const Ashu = new Employee("Ashu", "Kumar", "Soft104", new Date("2021-10-14"));

//Displaying properties
console.log("\nEmployee ID of Urvashi is ", Urvashi.idOfEmp);
console.log("\nAshu joined on ", Ashu.DOJ + "\n");

//Display full information
console.log(Ashu.fullInfo());
console.log(Urvashi.fullInfo());

//Using prototype to add new properties to object constructor
Employee.prototype.lang = "English";

//Using prototype to add new methods to object constructor
Employee.prototype.fullname = function () {
  return this.nameOfEmp + " " + this.surName;
};

console.log(
  "\nFull name of employees are",
  Urvashi.fullname(),
  " and ",
  Ashu.fullname()
);
