
export const EMA = (outputKey, inputKey, length) => (record, fullData) => {
  if (typeof record === 'undefined' || typeof record[inputKey] === 'undefined') {
    return null;
  }

  const lastPoint = (fullData.length >= 2) ? fullData[fullData.length - 2]: null;
  const previousEma = (lastPoint && lastPoint[inputKey]) ? lastPoint[inputKey] : record[inputKey];
  const K = 2 / (1 + length);
  const ema = (record[inputKey] * K) + (previousEma * (1 - K));
  return { [outputKey] : ema };
};