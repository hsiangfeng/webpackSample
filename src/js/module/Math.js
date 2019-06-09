function multi(num) {
  for(let num = 1; num < 9;num++){
    for (let j = 1; j < 9; j++){
      console.log(`${num} x ${j} = ${num * j}`);
    }
  }
}

function double(num) {
  console.log(`答案是: ${num * 2}`);
  return num * 2;
}

function sayHi(name) {
  console.log(`你好阿 ${name}`);
  return `你好阿 ${name}`;
}

module.exports = {
  multi,
  double,
  sayHi
}