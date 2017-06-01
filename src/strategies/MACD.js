import BaseStrategy from './base';
import * as studies from '../studies';

export class MACD extends BaseStrategy {
  constructor(fastLength, slowLength, signalLength) {
    super();

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

}