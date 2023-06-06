function toggle(...args) {
  let count = 0;

  return function () {
    args.length && console.log(args[count++]);
    if (args.length <= count) {
      count = 0;
    }
  };
}

const hello = toggle();

hello();
hello();

const onOff = toggle('on', 'off', '9');

onOff();
onOff();
onOff();
onOff();
onOff();
onOff();
