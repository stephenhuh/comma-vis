import React, {PureComponent} from 'react';
import {Line} from 'react-chartjs-2';
import {formatPathToChart} from '../utils';

const TimeTrailChart = ({path}) => {
  const options = {
    legend: {
      display: false
    },
    scales : {
      xAxes: [{
        type: 'time',
        time : {
          unit: 'minute',
        }
      }],
      yAxes: [{
        ticks :{
          beginAtZero: true
        }
      }]
    },
  }

  const data = formatPathToChart(path);

  return (
    <div className="timetrail">
      <h3>Time Trail 👁️  </h3>
      <Line options={options} data={data}/>
    </div>
  )
}

export default TimeTrailChart;

