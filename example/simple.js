const { TimeSeries, studyBuilder } = require('../lib');

const series = new TimeSeries();
series.map(studyBuilder.EMA('ema1', 'weight', 8));

const data = [
  {
    weight: 22.81
  },{
    weight: 23.09
  },{
    weight: 22.91
  },{
    weight: 23.23
  },{
    weight: 22.83
  }, {
    weight: 23.05
  },{
    weight: 23.02
  }, {
    weight: 23.29
  },{
    weight: 23.41
  },{
    weight: 23.49
  },{
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