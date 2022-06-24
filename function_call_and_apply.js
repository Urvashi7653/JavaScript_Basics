const data = {
    jobInfo: function(city,state){
    console.log(this.fname + " " + this.lname + " works at "+ this.company + ". I belong from "
    + city + "," + state)
}
}

const emp1 = {
    fname : "Urvashi",
    lname: " Suden",
    company: "Softprodigy"
}

//Displaying using call method:
data.jobInfo.call(emp1,"Jodhpur","Rajasthan \n");

//Displaying using apply method:
data.jobInfo.apply(emp1,["Jodhpur","Rajasthan\n"])

