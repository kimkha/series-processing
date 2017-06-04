export default class DataStream {
  constructor(data, options) {
    this.data = Object.assign([], data);
    this.length = this.data.length;

    this.options = Object.assign({
      // Default setting
      timefield: 'timestamp',
      timeformat: v => new Date(v),
      timeblock: '1min',
    }, options);

    if (typeof this.options.timefield !== "string") {
      throw Error(`options.timefield of DataStream must be a string.`);
    }
    if (typeof this.options.timeformat !== "function") {
      throw Error(`options.timeformat of DataStream must be a function.`);
    }

    this.timeBlockInMs = 60000;
    switch (this.options.timeblock) {
      case '5min':
        this.timeBlockInMs *= 5;
        break;
      case '15min':
        this.timeBlockInMs *= 15;
        break;
      case '30min':
        this.timeBlockInMs *= 30;
        break;
      case '1hr':
        this.timeBlockInMs *= 60;
        break;
      case '2hr':
        this.timeBlockInMs *= 120;
        break;
      case '3hr':
        this.timeBlockInMs *= 180;
        break;
      case '12hr':
        this.timeBlockInMs *= 720;
        break;
      case '1d':
        this.timeBlockInMs *= 1440;
        break;
    }
  }

  getData() {
    return this.data;
  };
  setData(data) {
    this.data = Object.assign([], data);
    this.length = this.data.length;
  };
  push(item) {
    this.data.push(item);
    this.length = this.data.length;
  };
  hasData() {
    return this.length > 0;
  };
  getLast() {
    return (this.length >= 1) ? this.data[ this.length - 1 ] : null;
  };
  getPrevious() {
    return (this.length >= 2) ? this.data[ this.length - 2 ] : null;
  };
  getLastSegment(length) {
    const segmentLength = Math.min(length, this.length);
    return this.data.slice(this.length - segmentLength);
  };

  calcDistanceWithLast() {
    if (!this.getLast() || !this.getPrevious()) return 0;
    const lastTime = +this.options.timeformat(this.getLast()[this.options.timefield]);
    const prevTime = +this.options.timeformat(this.getPrevious()[this.options.timefield]);
    return Math.ceil((lastTime - prevTime) / this.timeBlockInMs); // deltaTime / timeBlock
  };
}