const test = require('ava');
const fn = require('.');

const r = {
  rat: [0, 23],
  ox: [1, 2],
  tiger: [3, 4],
  rabbit: [5, 6],
  dragon: [7, 8],
  snake: [9, 10],
  horse: [11, 12],
  goat: [13, 14],
  monkey: [15, 16],
  rooster: [17, 18],
  dog: [19, 20],
  pig: [21, 22]
};

test('is function', t => {
  t.is(typeof fn, 'function');
});

test('should convert number', t => {
  for (const [zodiac, hours] of Object.entries(r)) {
    for (const hour of hours) {
      t.is(fn(hour), zodiac);
    }
  }
});

test('should convert string', t => {
  for (const [zodiac, hours] of Object.entries(r)) {
    for (const hour of hours) {
      t.is(fn(String(hour)), zodiac);
    }
  }
});

test('should not convert empty value', t => {
  for (const arg of [undefined, null, '']) {
    t.is(fn(arg), '');
  }
});

test('should not convert value > 24 hours', t => {
  t.is(fn(25), '');
});
