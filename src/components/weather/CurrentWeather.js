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

const CurrentWeather = () => {
	const weatherData = {
		day: 'Wednesday',
		date: '16 Mar 2022',
		time: '17:30',
		location: { city: 'Wroclaw', country: 'PL' },
		temp: '29',
		unit: 'C',
		overallWeather: 'Sunny',
	};
	const elements = [
		{ icon: <FontAwesomeIcon icon={faCloudRain} />, text: '22mm' },
		{ icon: <FontAwesomeIcon icon={faWind} />, text: '32km/h' },
		{ icon: <FontAwesomeIcon icon={faCompass} />, text: 'North-West' },
		{ icon: <FontAwesomeIcon icon={faTachometer} />, text: '1023 hPa' },
		{ icon: <FontAwesomeIcon icon={faWater} />, text: '45%' },
	];
	const nextDaysInfo = [
		{ day: 'Thursday', date: '17 Mar', temp: '22°C', rain: '0 mm' },
		{ day: 'Friday', date: '18 Mar', temp: '21°C', rain: '2 mm' },
		{ day: 'Saturday', date: '19 Mar', temp: '24°C', rain: '0 mm' },
		{ day: 'Sunday', date: '20 Mar', temp: '25°C', rain: '0 mm' },
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
					<NextDaysInfo elements={nextDaysInfo} />
				</WeatherInfoCard>
			</Flexbox>
		</Card>
	);
};

export default CurrentWeather;
