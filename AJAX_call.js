import fetch from "node-fetch";

const request = fetch("https://restcountries.com/v3.1/name/india");
console.log(request); // fetch returns a pending promise. We can also use "await" to get request

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())             //json() method also returns a promise
    .then((dataJSON) => {
        console.log(dataJSON)
    });
};

getCountryData("india");

