import fetch from "node-fetch";

const whereAmI = async function (country) {
  try {
    const response =  await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    //OR fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))

    const dataJSON =  await response.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }

  if (!country)
    throw new Error(console.log("Kindly mention country while calling"));
};

whereAmI("india");


//DOUBT - Even I remove await from both places, output remains same