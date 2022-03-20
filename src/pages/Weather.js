import { Fragment } from 'react';
import CurrentWeather from '../components/weather/CurrentWeather';
import './Weather.module.css';

const Weather = () => {
	return (
		<Fragment>
			<CurrentWeather></CurrentWeather>
		</Fragment>
	);
};

export default Weather;
