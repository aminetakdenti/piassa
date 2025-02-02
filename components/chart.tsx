'use client'; // Ensures this component only runs on the client

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'; // Correct import

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const option = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'center' as const,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })), // Fix faker usage
      backgroundColor: '#FF3D00',
    },
  ],
};

export default function BarChart() {
  return <Bar className='w-full flex-1' options={option} data={data} />;
}
