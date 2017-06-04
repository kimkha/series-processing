const { TimeSeries, studyBuilder } = require('../lib');

const series = new TimeSeries();
series.map(studyBuilder.EMA('ema1', 'weight', 8));

const data = [
  {
    timestamp: "2015-03-25T12:01:00.000Z",
    weight: 22.81
  },{
    timestamp: "2015-03-25T12:02:00.000Z",
    weight: 23.09
  },{
    timestamp: "2015-03-25T12:05:00.000Z",
    weight: 22.91
  },{
    timestamp: "2015-03-25T12:06:00.000Z",
    weight: 23.23
  },{
    timestamp: "2015-03-25T12:07:00.000Z",
    weight: 22.83
  }, {
    timestamp: "2015-03-25T12:08:00.000Z",
    weight: 23.05
  },{
    timestamp: "2015-03-25T12:09:00.000Z",
    weight: 23.02
  }, {
    timestamp: "2015-03-25T12:12:00.000Z",
    weight: 23.29
  },{
    timestamp: "2015-03-25T12:13:00.000Z",
    weight: 23.41
  },{
    timestamp: "2015-03-25T12:14:00.000Z",
    weight: 23.49
  },{
    timestamp: "2015-03-25T12:15:00.000Z",
    weight: 24.60
  }
];
// const data = [
//   {
//     weight: 69.8
//   },{
//     weight: 70.3
//   },{
//     weight: 69.8
//   },{
//     weight: 69.4
//   },{
//     weight: 69.4
//   },
//   {
//     weight: 68.9
//   },{
//     weight: 69.2
//   },
//   {
//     weight: 70.1
//   },{
//     weight: 69.7
//   },{
//     weight: 69.1
//   },{
//     weight: 68.6
//   },{
//     weight: 69.1
//   },{
//     weight: 68.8
//   },{
//     weight: 69.8
//   },{
//     weight: 69.7
//   },{
//     weight: 69.1
//   },{
//     weight: 68.8
//   },{
//     weight: 68.6
//   }, {
//     weight: 68.7
//   }
// ];

series.initData(data);
// series.appendData({ open: 239, close: 242 });

console.log(JSON.stringify(series.getDataSeries(), null, 2));