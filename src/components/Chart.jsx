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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'handleCurrencyName',
    },
  },
};

const labels = ['06:00 Am', '07:00 Am', '08:00 Am', '09:00 Am', '10:00 Am', '11:00 Am', '12:00 Am', '01:00 Pm', '02:00 Pm', '03:00 Pm', '04:00 Pm', '05:00 Pm', '06:00 Pm'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: false,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function Chart({ id, code, codein, name, hi, low, timestamp, created_at }) {
  return (
    <Grid container item xs={8} spacing={8}>
      <Line options={options} data={data} />
      <div className="currency">
        <div className="currency__info">
          <p>{code}</p>
          <p>{codein}</p>
          <p>{name}</p>
          <p>{hi}</p>
          <p>{low}</p>
          <p>{timestamp}</p>
          <p>{created_at}</p>
        </div>
      </div>
    </Grid>
  )
}

export default Chart
