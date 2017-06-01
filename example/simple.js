const { TimeSeries, studies } = require('../lib');

const series = new TimeSeries();
series.then(studies.EMA('ema1', 'close', 2));
series.then(studies.EMA('ema2', 'close', 4));
series.then((record) => {
  return { macd: record['ema1'] - record['ema2'] };
});
series.then(studies.EMA('emacd', 'macd', 3));
series.then((record) => {
  return { delta: record['macd'] - record['emacd'] };
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

console.log(JSON.stringify(series.getDataSeries(), null, 2));