import React from 'react';
import { Line } from 'react-chartjs-2';

import classes from './LineChart.module.css';

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

function LineChart(props) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				labels: {
					color: 'white',
					font: {
						size: 14,
					},
				},
			},
			title: {
				display: false,
				text: 'Chart.js Line Chart',
			},
		},
		scales: {
			y: {
				grid: {
					//color: 'white',
				},
				ticks: {
					color: 'white',
					font: {
						size: 14,
					},
				},
			},
			x: {
				grid: {
					//color: 'white',
				},
				ticks: {
					color: 'white',
					font: {
						size: 14,
					},
				},
			},
		},
	};

	const data = {
		labels: props.labels,
		datasets: [
			{
				label: props.title,
				data: props.data,
				borderColor: 'rgb(127 61 134)',
				backgroundColor: 'rgb(127 61 134)',
				color: 'black',
			},
		],
	};

	return (
		<div className={classes.chart}>
			<Line data={data} options={options} />
		</div>
	);
}

export default LineChart;
