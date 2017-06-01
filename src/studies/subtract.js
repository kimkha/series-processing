/**
 * Subtract 2 series
 *
 * <output series> = <input 1 series> - <input 2 series>
 */
export const subtract = (outputKey, inputKey1, inputKey2) => (record) => {
  if (typeof record === 'undefined') {
    return null;
  }
  return {
    [outputKey]: (record[inputKey1] || 0) - (record[inputKey2] || 0)
  }
};