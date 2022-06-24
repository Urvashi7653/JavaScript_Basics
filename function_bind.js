//bind function can be used to preserve this
const me ={
    fname: "Urvashi",
    lname: "Suden",
    profile: "Intern",

    info: function(){
     console.log(this.fname + " " + this.lname + " is an " + this.profile)
    }
}

// THIS WILL GIVE UNDEFINED RESULT.(when function me.info is used as callback "this" is lost)
// setTimeout(me.info,3000);

let information = me.info.bind(me);
setTimeout(information,3000);