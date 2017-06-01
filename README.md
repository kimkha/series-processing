# series-processing
Time-series processing for forex, market analysis, including SMA, EMA, MACD...

## Install

### NPM

`npm intall --save series-processing`

### Yarn (Recommended)

`yarn add series-processing`

## Example

[More examples](https://github.com/kimkha/series-processing/tree/master/example)

### Simple with studyBuilder

```javascript
const { TimeSeries, studyBuilder } = require('../lib');

const series = new TimeSeries();
series.then(studyBuilder.EMA('ema1', 'close', 2));

series.initData(data); // data: Array of candle object

console.log(series.getDataSeries()); // Print result: Array of transformed candle object
```

More studyBuilder can found [here](https://github.com/kimkha/series-processing/tree/master/src/study-builder)

### Multiple studies with same series

```javascript
const series = new TimeSeries();
series.then(studyBuilder.EMA('ema1', 'close', 2));
series.then(studyBuilder.SMA('sma1', 'open', 4));
series.then(studyBuilder.EMA('ema2', 'sma1', 5));
```

OR with array

```javascript
const series = new TimeSeries();
series.then([
  studyBuilder.EMA('ema1', 'close', 2),
  studyBuilder.SMA('sma1', 'open', 4),
  studyBuilder.EMA('ema2', 'sma1', 5)
]);
```

### Custom study

```javascript
const series = new TimeSeries();
series.then((lastPoint) => {
  return { 'avg' : (lastPoint['open'] + lastPoint['close']) / 2 }
});
```

## API Reference

_API docs is coming soon._

## License

MIT License.
