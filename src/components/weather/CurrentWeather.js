import classes from './CurrentWeather.module.css';
import Card from '../UI-helpers/Card';
import WeatherInfoCard from './WeatherInfoCard';
import Flexbox from '../UI-helpers/Flexbox';

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
	return (
		<Card>
			<Flexbox className='flex--row'>
				<WeatherInfoCard
					className='weather weather--rightspin'
					weatherData={weatherData}
				></WeatherInfoCard>
				<WeatherInfoCard className='weather weather--middle' weatherData={weatherData}></WeatherInfoCard>
				<WeatherInfoCard
					className='weather weather--leftspin'
					weatherData={weatherData}
				></WeatherInfoCard>
			</Flexbox>
		</Card>
	);
};

export default CurrentWeather;
