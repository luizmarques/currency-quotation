import React from 'react'
import "../assets/css/style.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Grid } from '@material-ui/core';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function Chart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: (props.currencyHistory[0]?.code, " / ", props.currencyHistory[0]?.name)
      },
    },
  };

  const data = {
    labels: props.currencyHistory.map((currency, i) => {
      return (props.currencyHistory[0]?.create_date)
    }),
    datasets: [
      {
        label: 'High Price',
        data: props.currencyHistory.map((i) => {
          return faker.datatype.number({ max: parseFloat(i.high) })
        }),
        borderColor: 'rgba(0, 128, 0, 0.5)',
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
        fill: false,
      },
      {
        label: 'Low Price',
        data: props.currencyHistory.map((i) => {
          return faker.datatype.number({ max: parseFloat(i.low) })
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
    ],
  };

  return (
    <Grid className="chart" container item xs={8} spacing={8}>
      <Line options={options} data={data} />
    </Grid>
  )
}

export default Chart
