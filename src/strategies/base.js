import TimeSeries from '../timeseries';

export default class BaseStrategy {
  series = new TimeSeries();

  applyData = (data) => {
    this.series.initData(data);
    return this.series.getData();
  };

  addOne = (item) => {
    this.series.appendData(item);
    return this.series.getLatest();
  };
}