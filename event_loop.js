//Observe how event loop works 

console.log("Test start");

//After 0 seconds this will be put on callback queue
setTimeout(() =>console.log("0 seconds timer"),0)

//Creates a promise which is resolved immediately
Promise.resolve("Resolved promise 1").then(res => console.log(res));

/**Creates a promise which will take some time, 
to show that that setTimeout will run after more than 0 seconds **/
Promise.resolve("Resolved promise 2").then(res =>
    {
        for (let i =0; i<10000000000;i++);
        console.log(res);
    })

console.log("Test end")


/**EXPLANATION OF OUTPUT : First synchronous statements console.log will run.Once 
call stack is empty event loop which check microtask queue and promises will be put in callstack queue.
After that event loop will put setTimeout from callback queue into call stack**/
