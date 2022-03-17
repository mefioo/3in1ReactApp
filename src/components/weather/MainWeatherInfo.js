import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import classes from './MainWeatherInfo.module.css';

const MainWeatherInfo = (props) => {	
	return (
		<div className={classes.main}>
			<div className={classes.info}>
				<p className={classes.day}>{props.weatherData.day}</p>
				<p>{`${props.weatherData.date}, ${props.weatherData.time}`}</p>
				<p>
					<FontAwesomeIcon icon={faLocationDot} />
					{` ${props.weatherData.location.city}, ${props.weatherData.location.country}`}
				</p>
			</div>
			<div className={`${classes.info} ${classes['info--right']}`}>
				<p className=''>
					<FontAwesomeIcon className={classes.icon} icon={faSun} />
					<span> {props.weatherData.overallWeather}</span>
				</p>
				<p className={classes.temp}>
					{`${props.weatherData.temp}°${props.weatherData.unit}`}
				</p>
			</div>
		</div>
	);
};

export default MainWeatherInfo;
