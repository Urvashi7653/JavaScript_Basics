//Creating a class
class person {
  constructor(fname, lname, yearOfBirth) {
    this.firstName = fname;
    this.lastName = lname;
    this.birthYear = yearOfBirth;
  }

  //Creating a static method
  static welcome() {
    console.log("Hello user");
  }

  //Static method with parameters
  static personalisedWelcome(x) {
    console.log(x.firstName + " welcomes you!!");
  }

  //Class methods
  age() {
    const y = new Date();
    const presentYear = y.getFullYear();
    const age = presentYear - this.birthYear;
    return age;
  }

  fullInfo() {
    return (
      this.firstName + " " + this.lastName + " is " + this.age() + " years old."
    );
  }
}

//Creating inherited class
class model extends person {
  constructor(fname, lname, yearOfBirth, BMI, genre) {
    super(fname, lname, yearOfBirth);
    this.bodyMassIndex = BMI;
    this.movieGenre = genre;
  }
  display() {
    return this.firstName + " is " + this.movieGenre + " movie hero.";
  }
}

//Creating class objects
let p1 = new model("Akshay", "Kumar", 1994, 20, "action");
let p2 = new person("Amit", "Chopra", 2000);

//Calling static methods
person.welcome();
person.personalisedWelcome(p1);

//Calling
console.log(p1.display());
console.log(p2.fullInfo());
