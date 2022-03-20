import React from 'react';
import { Line } from 'react-chartjs-2';

import classes from './LineChart.module.css';

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

function LineChart(props) {
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: false,
				text: 'Chart.js Line Chart',
			},
		},
	};

	const data = {
		labels: props.labels,
		datasets: [
			{
				label: props.title,
				data: props.data,
				borderColor: 'black',
				backgroundColor: 'lightgrey',
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
