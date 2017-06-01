/**
 * Series 1 cross over series 2
 *
 * <output series> = crossover(<input 1 series>, <input 2 series>)
 * <output series> = crossover(<input 1 series>, number)
 */
export const crossover = (outputKey, inputKey1, inputKey2) => (lastPoint, dataStream) => {
  const previous = dataStream.getPrevious();
  const comparePrev = compare(previous, inputKey1, inputKey2);
  const compareLast = compare(lastPoint, inputKey1, inputKey2);
  if (isNaN(compareLast) || isNaN(comparePrev)) return null;
  // Cross over when series 1's prev is lower but last is upper
  return { [outputKey]: comparePrev < 0 && compareLast > 0};
};

/**
 * Series 1 cross under series 2
 *
 * <output series> = crossunder(<input 1 series>, <input 2 series>)
 * <output series> = crossunder(<input 1 series>, number)
 */
export const crossunder = (outputKey, inputKey1, inputKey2) => (lastPoint, dataStream) => {
  const previous = dataStream.getPrevious();
  const comparePrev = compare(previous, inputKey1, inputKey2);
  const compareLast = compare(lastPoint, inputKey1, inputKey2);
  if (isNaN(compareLast) || isNaN(comparePrev)) return null;
  // Cross under when series 1's prev is upper but last is lower
  return { [outputKey]: comparePrev > 0 && compareLast < 0};
};

const compare = (item, key1, key2) => {
  if (!item || isNaN(item[key1])) return null;
  const v2 = isNaN(key2) ? item[key2] : key2;
  if (isNaN(v2)) return null;
  const v1 = item[key1];
  return v1 - v2;
};