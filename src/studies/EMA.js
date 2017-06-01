
const EMABuilder = (outputKey, inputKey, length) => (record, fullData) => {
  if (!record || !record[inputKey]) {
    return null;
  }

  const K = 2 / (1 + length);
  const previousEma = 0; // FIXME
  const ema = (record[inputKey] * K) + (previousEma * (1 - K));
  return { [outputKey] : ema };
};

export const EMA = EMABuilder;