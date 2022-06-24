//Creating a map
const choc = new Map([
  ["Dairy Milk", 100],
  ["Temptation", 50],
  ["Hersheys", 75],
]);
console.log(choc);

//Adding and changing elements
choc.set("Nestle", 200);
choc.set("Dairy Milk", 25);
console.log(choc);

//delete method
choc.delete("Hersheys");
console.log(choc);

//get() method to get value of key
console.log("Number of Temptations are: ", choc.get("Temptation"));

//size() method
console.log("Size of choc map is: ", choc.size);

//forEach method to display map
let txt = "";
choc.forEach(function (value, key) {
  txt += key + ": " + value + "\n";
});
console.log(txt);

//list all keys
let txt1 = "";
for (const x of choc.keys()) {
  txt1 += x + "\t";
}
console.log(txt1);

//list all values
let txt2 = "";
for (const y of choc.values()) {
  txt2 += y + "\t\t";
}
console.log(txt2);
