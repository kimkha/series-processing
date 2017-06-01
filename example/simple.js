const { TimeSeries, studyBuilder } = require('../lib');

const series = new TimeSeries();
series.then(studyBuilder.EMA('ema1', 'close', 2));

const data = [
  {
    open: 232,
    close: 232
  },
  {
    open: 232,
    close: 234
  },
  {
    open: 234,
    close: 237
  },
  {
    open: 237,
    close: 235
  },
  {
    open: 235,
    close: 236
  },
  {
    open: 236,
    close: 239
  }
];

series.initData(data);
series.appendData({ open: 239, close: 242 });

console.log(JSON.stringify(series.getDataSeries(), null, 2));