function curry() {
  let total = 0;
  return function (num = 0) {
    total += num;
    console.log(total);
  };
}

let sum = curry();

sum(1);
sum(4);
sum(5);
sum(2);
sum(8);
sum(81);
sum();
