const { TimeSeries, studies } = require('../lib');

const series = new TimeSeries();
series.then(studies.EMA('ema1', 'close', 2));
series.then(studies.EMA('ema2', 'close', 10));
series.then((record) => {
  return { macd: record['ema2'] - record['ema1'] };
});

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
  }
];

series.initData(data);
series.appendData({ close: 242 });

console.log(JSON.stringify(series.getData()));