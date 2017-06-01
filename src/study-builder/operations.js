
/**
 * Add 2 series
 *
 * <output series> = <input 1 series> + <input 2 series>
 * OR
 * <output series> = <input 1 series> + <number>
 */
export const add = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1) + (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2)
  }
};

/**
 * Subtract 2 series
 *
 * <output series> = <input 1 series> - <input 2 series>
 * OR
 * <output series> = <input 1 series> - <number>
 */
export const subt = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1) - (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2)
  }
};

/**
 * Multiply 2 series
 *
 * <output series> = <input 1 series> * <input 2 series>
 * OR
 * <output series> = <input 1 series> * <number>
 */
export const mult = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1) * (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2)
  }
};

/**
 * Divide 2 series
 *
 * <output series> = <input 1 series> / <input 2 series>
 * OR
 * <output series> = <input 1 series> / <number>
 */
export const div = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1) / (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2)
  }
};

/**
 * Modular 2 series
 *
 * <output series> = <input 1 series> % <input 2 series>
 * OR
 * <output series> = <input 1 series> % <number>
 */
export const mod = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1) % (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2)
  }
};

/**
 * Pow 2 series
 *
 * <output series> = <input 1 series> * <input 2 series>
 * OR
 * <output series> = <input 1 series> * <number>
 */
export const pow = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: Math.pow((isNaN(inputKey1) ? record[inputKey1] || 0 : inputKey1), (isNaN(inputKey2) ? record[inputKey2] || 0 : inputKey2))
  }
};