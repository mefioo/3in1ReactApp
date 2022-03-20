import Card from '../UI-helpers/Card';
import WeatherInfoCard from '../UI-helpers/WeatherInfoCard';
import Flexbox from '../UI-helpers/Flexbox';
import MainWeatherInfo from './MainWeatherInfo';
import DetailedInfo from './DetailedInfo';
import NextDaysInfo from './NextDaysInfo';

import {
	faCloudRain,
	faWind,
	faCompass,
	faTachometer,
	faWater,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWeatherData } from '../../store/weather-actions';

const CurrentWeather = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeatherData('Wroclaw'));
	}, [dispatch]);

	const data = useSelector((state) => state.weather);
	console.log(data);
	const weatherData = {
		day: data.today.day,
		date: data.today.date,
		time: data.today.time,
		location: { city: data.today.city, country: data.today.country },
		temp: data.today.temp,
		unit: 'C',
		overallWeather: data.today.overallWeather,
	};

	const elements = [
		{
			icon: <FontAwesomeIcon icon={faCloudRain} />,
			text: `${data.today.rain} mm`,
		},
		{
			icon: <FontAwesomeIcon icon={faWind} />,
			text: `${data.today.windSpeed} km/h`,
		},
		{
			icon: <FontAwesomeIcon icon={faCompass} />,
			text: data.today.windDirection,
		},
		{
			icon: <FontAwesomeIcon icon={faTachometer} />,
			text: `${data.today.pressure} hPa`,
		},
		{
			icon: <FontAwesomeIcon icon={faWater} />,
			text: `${data.today.humidity}%`,
		},
	];

	return (
		<Card>
			<Flexbox className='flex--row'>
				<WeatherInfoCard className='weather weather--rightspin'>
					<Flexbox className='flex--column'>
						<DetailedInfo elements={elements} />
					</Flexbox>
				</WeatherInfoCard>
				<WeatherInfoCard className='weather weather--middle'>
					<MainWeatherInfo weatherData={weatherData} />
				</WeatherInfoCard>
				<WeatherInfoCard className='weather weather--leftspin'>
					<NextDaysInfo data={data.stats} />
				</WeatherInfoCard>
			</Flexbox>
		</Card>
	);
};

export default CurrentWeather;
