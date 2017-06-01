import TimeSeries from '../timeseries';
import * as studies from '../studies';

export class MACD {
  series = new TimeSeries();

  constructor(fastLength, slowLength, signalLength) {
    this.fastLength = Math.max(1, fastLength);
    this.slowLength = Math.max(1, slowLength);
    this.signalLength = Math.max(1, signalLength);

    this.prepareSeries();
  }

  prepareSeries = () => {
    this.series
      .then(studies.EMA('fast', 'close', this.fastLength))    // fast = ema(close, fastLength)
      .then(studies.EMA('slow', 'close', this.slowLength))    // slow = ema(close, slowLength)
      .then(studies.subtract('macd', 'fast', 'slow'))         // macd = fast - slow
      .then(studies.EMA('emacd', 'macd', this.signalLength))  // emacd = ema(macd, signalLength)
      .then(studies.subtract('result', 'macd', 'emacd'));     // result = macd - emacd
  };

  applyData = (data) => {
    this.series.initData(data);
    return this.series.getData();
  };
}