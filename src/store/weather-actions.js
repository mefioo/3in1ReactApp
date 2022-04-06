import { weatherActions } from './weather-slice';
import { errorActions } from './error-slice';

const determineWindDirection = (deg) => {
	if (deg >= 337.5 || deg < 22.5) return 'North';
	if (deg >= 22.5 && deg < 67.5) return 'North-East';
	if (deg >= 67.5 && deg < 112.5) return 'East';
	if (deg >= 112.5 && deg < 157.5) return 'South-East';
	if (deg >= 157.5 && deg < 202.5) return 'South';
	if (deg >= 202.5 && deg < 247.5) return 'South-West';
	if (deg >= 247.5 && deg < 292.5) return 'West';
	if (deg >= 292.5 && deg < 337.5) return 'North-West';
};

const getNeccessaryStats = (arr) => {
	let labels = [];
	let data = { temp: [], rain: [] };
	for (let i = 0; i < 10; i++) {
		data.temp.push(`${parseInt(arr[i].main.temp - 273)}`);
		data.rain.push(`${arr[i].rain ? arr[i].rain['3h'] : []}`);
		labels.push(arr[i].dt_txt.split(' ')[1].slice(0, -3));
	}

	return { labels, data };
};

const setErrorData = (errorCode) => {
	let errorData = {};
	switch (errorCode) {
		case 401:
			errorData = {
				title: 'Unauthorized',
				code: 401,
				message:
					'Could not fetch data from external API. Please make sure your API key is valid and reload the app.',
				link: 'https://openweathermap.org/api',
			};
			break;
		case 404:
			errorData = {
				title: 'City not found',
				code: 404,
				message:
					'We could not find requested city name. Please make sure you inserted the name correctly.',
			};
			break;
		default:
			errorData = {
				title: 'Error',
				code: 0,
				message:
					'Some problem occured. Please reload the app or contact the administrator.',
			};
			break;
	}
	return errorData;
};

export const getWeatherData = (city, apiKey) => {
	return async (dispatch) => {
		const link = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

		const fetchData = async () => {
			const response = await fetch(link);

			if (!response.ok) {
				const errorData = setErrorData(response.status);
				dispatch(errorActions.setError(errorData));
			}
			const data = await response.json();
			return data;
		};

		try {
			const data = await fetchData();

			dispatch(
				weatherActions.changeWeatherData({
					location: {
						city: city,
						country: data.city.country,
					},
					todayStats: {
						overallWeather: data.list[0].weather[0].description,
						temp: parseInt(data.list[0].main.temp - 273),
						pressure: data.list[0].main.pressure,
						windSpeed: parseInt(data.list[0].wind.speed),
						windDirection: determineWindDirection(data.list[0].wind.deg),
						humidity: data.list[0].main.humidity,
						rain: data.list[0].rain ? data.list[0].rain['3h'] : 0,
					},
					nextHoursStats: getNeccessaryStats(data.list),
				})
			);
		} catch (error) {
			dispatch(weatherActions.showNoData());
		}
	};
};
