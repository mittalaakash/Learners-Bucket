const add = (...args) => {
  let nums = [...args];
  const sum = (...args2) => {
    nums.push(...args2);
    return sum;
  };
  sum.valueOf = () => {
    return nums.reduce((a, b) => {
      return a + b;
    }, 0);
  };
  sum.value = sum.valueOf;
  return sum;
};

console.log(add(1, 2, 3).value() === 5);
console.log(add(1, 2)(3).value() === 6);
console.log(add(1, 2, 3).value() === 6);
console.log(add(1, 2)(1) + 3);
