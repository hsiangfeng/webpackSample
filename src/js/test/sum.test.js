const sum = require('../module/sum');

test('算數 1 + 2 必須等於 3', () => {
  expect(sum(1, 2)).toBe(3);
});