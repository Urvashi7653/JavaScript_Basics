let x = "";

//Creating a nested array and nested object
const me = {
  fname: "Urvashi",
  lname: "Suden",
  hobbies: [
    { type: "Outdoor hobbies", list: ["Swimming", "Yoga"] },
    { type: "Indoor hobbies", list: ["Coding", "Cooking"] },
  ],
};

//Using for... in to access arrays inside arrays
for (let i in me.hobbies) {
  x += me.hobbies[i].type + "\n";
  for (let j in me.hobbies[i].list) x += me.hobbies[i].list[j] + "\n";
}

console.log("Elements are displayed using for... in loop\n\n" + x);
