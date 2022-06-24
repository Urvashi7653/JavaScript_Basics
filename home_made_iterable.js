function numbers() {
  let n = 0;
  let status = false;
  return {
    //similar to next() function of symbol.iterator
    myNext: function () {
      n += 1;
      if (n == 10) status = true;
      return {
        value: n,
        done: status,
      };
    },
  };
}

const n = numbers();
n.myNext();
n.myNext();
console.log(n.myNext().value, ",", n.myNext().done);
