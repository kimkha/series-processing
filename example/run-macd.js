const { TimeSeries, studyBuilder } = require('../lib');

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

const m1 = new TimeSeries()
  .map(studyBuilder.MACD('delta', 'close', 2, 3, 9))
  .map(studyBuilder.crossover('long', 'delta', 0))
  .map(studyBuilder.crossunder('short', 'delta', 0))
  .initData(data).getDataSeries().map(r => ({ delta: r.delta, long: r.long, short: r.short }));
const m2 = new TimeSeries()
  .map(studyBuilder.MACD('delta', 'close', 4, 6, 9))
  .map(studyBuilder.crossover('long', 'delta', 0))
  .map(studyBuilder.crossunder('short', 'delta', 0))
  .initData(data).getDataSeries().map(r => ({ delta: r.delta, long: r.long, short: r.short }));

console.log("\n\nM1: ----------");
console.log(JSON.stringify(m1, null, 2));

console.log("\n\nM2: ----------");
console.log(JSON.stringify(m2, null, 2));