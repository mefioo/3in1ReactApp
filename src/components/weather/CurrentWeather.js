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
	faDroplet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWeatherData } from '../../store/weather-actions';
import LocationForm from './LocationForm';

const CurrentWeather = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeatherData('Wroclaw'));
	}, [dispatch]);

	const data = useSelector((state) => state.weather);
	const weatherData = {
		day: data.timeline.weekDay,
		date: `${data.timeline.date.day} ${data.timeline.date.month}`,
		time: data.timeline.time,
		location: { city: data.location.city, country: data.location.country },
		temp: data.todayStats.temp,
		unit: 'C',
		overallWeather: data.todayStats.overallWeather,
	};

	const elements = [
		{
			icon: <FontAwesomeIcon icon={faCloudRain} />,
			text: `${data.todayStats.rain} mm`,
		},
		{
			icon: <FontAwesomeIcon icon={faWind} />,
			text: `${data.todayStats.windSpeed} km/h`,
		},
		{
			icon: <FontAwesomeIcon icon={faCompass} />,
			text: data.todayStats.windDirection,
		},
		{
			icon: <FontAwesomeIcon icon={faTachometer} />,
			text: `${data.todayStats.pressure} hPa`,
		},
		{
			icon: <FontAwesomeIcon icon={faDroplet} />,
			text: `${data.todayStats.humidity}%`,
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
					<NextDaysInfo data={data.nextHoursStats} />
				</WeatherInfoCard>
			</Flexbox>
			<Flexbox className='flex--row'>
				<LocationForm />
			</Flexbox>
		</Card>
	);
};

export default CurrentWeather;
