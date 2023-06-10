function curry(fn) {
  const addition = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => {
        return addition(...args, ...args2);
      };
    }
  };
  return addition;
}

function sum(a, b, c, d) {
  return a + b + c + d;
}
let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1, 2)(3, 4));
