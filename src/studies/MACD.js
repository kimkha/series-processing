import { EMA } from './EMA';
import { subtract } from './subtract';

/**
 * Moving Average Convergence/Divergence (MACD)
 * @see https://en.wikipedia.org/wiki/Moving_average
 *
 * <output series> = macd(<input series>, fastLength, slowLength, signalLength)
 */
export const MACD = (outputKey, inputKey, fastLength, slowLength, signalLength) => [
  EMA(`${outputKey}_fast`, inputKey, fastLength), //                          fast = ema(close, fastLength)
  EMA(`${outputKey}_slow`, inputKey, slowLength), //                          slow = ema(close, slowLength)
  subtract(`${outputKey}_macd`, `${outputKey}_fast`, `${outputKey}_slow`), // macd = fast - slow
  EMA(`${outputKey}_emacd`, `${outputKey}_macd`, signalLength), //            emacd = ema(macd, signalLength)
  subtract(outputKey, `${outputKey}_macd`, `${outputKey}_emacd`), //          result = macd - emacd
];