
export default class TimeSeries {
  data = [];
  chain = [];

  constructor(options) {
    this.options = Object.assign({
      // Default value
    }, options);
  }

  getData = () => this.data;

  initData = (data = [], skip = false) => {
    if (skip) {
      this.data = data;
    } else {
      // Append one-by-one
      this.data = [];

      data.map(record => this.appendData(record));
    }

    return this;
  };

  appendData = (record) => {
    // TODO How about update last data?
    this.data.push(record);

    for (let { func } of this.chain) {
      Object.assign(record, func(record, this.data));
    }

    return this;
  };

  then = (func) => {
    if (typeof func === 'function') {
      this.chain.push({
        type: 'then',
        func,
      });

      // TODO Call func if data exists
    }

    return this;
  };

  aggregate = (func) => {
    return func(this.data);
  };
}