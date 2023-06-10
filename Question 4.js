const sum = (...args) => {
  const nums = [...args];
  if (args.length === 0) return 0;

  const addition = (...args2) => {
    if (args2.length === 0) {
      return nums.reduce((a, b) => a + b, 0);
    } else {
      nums.push(...args2);
      return addition;
    }
  };
  return addition;
};

let total = sum(10)(20)(30)(40)();

console.log(total);
total = sum();
console.log(total);
