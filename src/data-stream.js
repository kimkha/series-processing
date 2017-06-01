
export default class DataStream {
  constructor(data) {
    this.data = Object.assign([], data);
    this.length = this.data.length;
  }

  getData = () => this.data;
  setData = (data) => {
    this.data = Object.assign([], data);
    this.length = this.data.length;
  };
  push = (item) => {
    this.data.push(item);
    this.length = this.data.length;
  };
  getLast = () => (this.length >= 1) ? this.data[this.length - 1] : null;
  getPrevious = () => (this.length >= 2) ? this.data[this.length - 2] : null;
  getLastSegment = (length) => {
    const segmentLength = Math.min(length, this.length);
    return this.data.slice(this.length - segmentLength);
  };
}