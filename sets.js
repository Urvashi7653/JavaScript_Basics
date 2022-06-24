//Creating new set
const lang = new Set(["HTML", "HTML", "CSS", "JavaScript"]);

//Set counts only unique values
console.log(lang);
console.log(lang.size);

//Adding new element
lang.add("Python");
console.log(lang);

//listing all elements using forEach()
let txt = "";
lang.forEach(function (value) {
  txt += value + "\t";
});
console.log(txt);

//deleting
lang.delete("HTML");
console.log(lang);

//clearing
lang.clear();
console.log(lang);
