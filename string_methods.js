//length property
let txt = "Urvashi Suden";
console.log(`Length of "Urvashi Suden" is`, txt.length);

//Slice() method
console.log("First name using slice()", txt.slice(0, 7));

//Replacing string content
let newTxt = txt.replace("Urvashi Suden", "Softprodigy");
console.log("Replacing content", newTxt);

//toUpperCase
console.log("Upper case ", txt.toUpperCase());

//concat
console.log("String concatenation", txt.concat(",", newTxt));
