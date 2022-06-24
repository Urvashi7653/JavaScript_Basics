//PROMISIFYING setTimeout function : call back based asynchronous behavior to promise based
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//Consuming the promise
wait(1)
  .then(() => {
    console.log("I waited 1 second");
    return wait(1);
  })
  .then(() => {
    console.log("I waited 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited 3 seconds");
    return wait(1);
  });
