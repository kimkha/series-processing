import { SMA } from './SMA';
/**
 * Exponential Moving Average
 * @see https://en.wikipedia.org/wiki/Exponential_smoothing
 *
 * <output series> = ema(<input series>, length)
 */
export const EMA = (outputKey, inputKey, length) => (lastPoint, dataStream) => {
  if (typeof lastPoint === 'undefined' || typeof lastPoint[inputKey] === 'undefined') {
    return null;
  }

  const previousPoint = dataStream.getPrevious();
  let previousEma = null;
  if (previousPoint && previousPoint[outputKey]) {
    previousEma = previousPoint[outputKey];
  } else {
    // Use SMA when the first previous EMA value is not available
    const sma = SMA(`test`, 'close', length)(lastPoint, dataStream);
    if (sma && sma[`test`]) {
      previousEma = sma[`test`];
    }
  }

  if (!previousEma) return null;

  const K = 2 / (1 + length);
  const ema = (lastPoint[inputKey] - previousEma) * K + previousEma;
  return { [outputKey] : ema };
};
