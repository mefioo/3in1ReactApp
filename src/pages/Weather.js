import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ApiKeyModal from '../components/UI-helpers/ApiKeyModal';
import CurrentWeather from '../components/weather/CurrentWeather';
import './Weather.module.css';

const Weather = () => {
	const api = useSelector((state) => state.api);

	return (
		<Fragment>
			{api.apiKey.length === 0 && api.isSkipped === false && <ApiKeyModal />}
			<CurrentWeather />
		</Fragment>
	);
};

export default Weather;
