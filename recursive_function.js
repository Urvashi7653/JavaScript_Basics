//Recursive function to find sum

function sum(n) {
  console.log(n);
  if (n < 1) return n;
  return n + sum(n - 1);
}

let x = sum(20);
console.log(x);
