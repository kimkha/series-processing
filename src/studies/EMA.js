/**
 * Exponential Moving Average
 * @see https://en.wikipedia.org/wiki/Exponential_smoothing
 */
export const EMA = (outputKey, inputKey, length) => (lastPoint, dataStream) => {
  if (typeof lastPoint === 'undefined' || typeof lastPoint[inputKey] === 'undefined') {
    return null;
  }

  const previousPoint = dataStream.getPrevious();
  // Use the last data item as the first previous EMA value (if not previous point)
  const previousEma = (previousPoint && previousPoint[inputKey]) ? previousPoint[inputKey] : lastPoint[inputKey];
  const K = 2 / (1 + length);
  const ema = (lastPoint[inputKey] * K) + (previousEma * (1 - K));
  return { [outputKey] : ema };
};