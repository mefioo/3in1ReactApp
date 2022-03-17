import NextDayInfo from './NextDayInfo';

import classes from './NextDaysInfo.module.css';

const NextDaysInfo = (props) => {
	const nextDaysWeatherInfo = props.elements.map((element, index) => {
		return (
			<NextDayInfo
				key={index}
				day={element.day}
				date={element.date}
				temp={element.temp}
				rain={element.rain}
			></NextDayInfo>
		);
	});
	return <div className={classes.info}>{nextDaysWeatherInfo}</div>;
};

export default NextDaysInfo;
