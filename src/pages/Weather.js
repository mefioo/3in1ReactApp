import { Fragment } from 'react';
import CurrentWeather from '../components/weather/CurrentWeather';
import './Weather.module.css';

const Weather = () => {
	return (
		<Fragment>
			{/* <div>buttony z częstotliwością (godzinowa, dzienna, tygodniowa)</div> */}
			<CurrentWeather></CurrentWeather>
			<div>obok popularne + szukajka</div>
			<div>wyniki w zależności od wybranego </div>
		</Fragment>
	);
};

export default Weather;
