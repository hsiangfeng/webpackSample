const mathModule = require('../module/Math');

test('2 的雙倍是 4', () => {
  expect(mathModule.double(2)).toBe(4);
});

test('預期會出現『你好阿 大明』', () => {
  expect(mathModule.sayHi('大明')).toBe('你好阿 大明');
})