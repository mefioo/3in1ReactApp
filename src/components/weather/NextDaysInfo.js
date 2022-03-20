import classes from './NextDaysInfo.module.css';
import LineChart from './LineChart';

const NextDaysInfo = (props) => {
	return (
		<div className={classes.info}>
			<LineChart
				labels={props.data.labels}
				data={props.data.data.temp}
				title='Temperature (°C)'
			/>
			<LineChart
				labels={props.data.labels}
				data={props.data.data.rain}
				title='Rain (mm)'
			/>
		</div>
	);
};

export default NextDaysInfo;
