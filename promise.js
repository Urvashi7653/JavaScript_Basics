/**Simulate a lottery using promise. Fulfilled promise means to win lottery,
  reject means you lost**/

//Creating new promise using promise constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Welcome!! Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("YOU WIN!!"); // promise fulfilled, this value will be returned while consuming promise using "then"
    } else {
      reject(new Error("OOPS!! YOU LOST")); //promise rejected, this will be returned to catch
    }
  }, 2000);
});

//consuming the promise
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Creating a promise which is immediately settled
// Promise.resolve("Resolved promise").then(x =>console.log(x));
//Promise.reject(new Error("Rejected promise")).catch(x => console.error(x));
