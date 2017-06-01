const { strategies } = require('../lib');

const data = [
  {
    close: 232
  },
  {
    close: 234
  },
  {
    close: 237
  },
  {
    close: 235
  },
  {
    close: 236
  },
  {
    close: 239
  },
  {
    close: 242
  }
];

const m1 = new strategies.MACD(2, 3, 2).applyData(data);
const m2 = new strategies.MACD(4, 6, 2).applyData(data);

console.log("\n\nM1: ----------");
console.log(JSON.stringify(m1, null, 2));

console.log("\n\nM2: ----------");
console.log(JSON.stringify(m2, null, 2));