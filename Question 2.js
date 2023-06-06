//write sampler
function sampler(fn, count) {
  let num = 0;
  const helper = text => {
    if (count === ++num) {
      fn(text);
      num = 0;
    }
  };
  return helper;
}

function message(text) {
  console.log(text);
}

const sample = sampler(message, 4);

sample('1');
sample('2');
sample('3');
sample('4'); //only this should be invoked
sample('1');
sample('2');
sample('3');
sample('5'); //only this should be invoked
