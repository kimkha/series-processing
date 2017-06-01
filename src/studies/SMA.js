/**
 * Simple Moving Average
 * @see https://en.wikipedia.org/wiki/Moving_average
 */
export const SMA = (outputKey, inputKey, length) => (lastPoint, dataStream) => {
  const segment = dataStream.getLastSegment(length);
  const segmentLength = segment.length;

  if (segmentLength < length) {
    // Not enough to calculate
    return null;
  }

  const sma = segment.reduce((n, point) => n + point[inputKey], 0) / segmentLength;

  return { [outputKey] : sma };
};