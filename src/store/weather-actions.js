import { weatherActions } from './weather-slice';
import { API_KEY } from '../to-ignore';

const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

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
	console.log(arr);
	for (let i = 0; i < 10; i++) {
		data.temp.push(`${parseInt(arr[i].main.temp - 273)}`);
		data.rain.push(`${arr[i].rain || []}`);
		labels.push(arr[i].dt_txt.split(' ')[1].slice(0, -3));
	}

	return { labels, data };
};

export const getWeatherData = (city) => {
	return async (dispatch) => {
		const date = new Date();
		const todaysDate = `${date.getDate()} ${months[date.getMonth()]}`;
		const minutes =
			`${date.getMinutes()}`.length === 1
				? '0' + date.getMinutes()
				: date.getMinutes();
		const currentTime = `${date.getHours()}:${minutes}`;
		const day = weekDays[date.getDay()];

		const link = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

		const fetchData = async () => {
			const response = await fetch(link);

			if (!response.ok) {
				throw new Error('Somethink went wrong!');
			}
			const data = await response.json();
			return data;
		};

		try {
			const data = await fetchData();

			dispatch(
				weatherActions.changeWeatherData({
					today: {
						city: 'Wroclaw',
						country: data.city.country,
						date: todaysDate,
						time: currentTime,
						day,
						overallWeather: data.list[0].weather[0].description,
						temp: parseInt(data.list[0].main.temp - 273),
						pressure: data.list[0].main.pressure,
						windSpeed: parseInt(data.list[0].wind.speed),
						windDirection: determineWindDirection(data.list[0].wind.deg),
						humidity: data.list[0].main.humidity,
						rain: data.list[0].rain || 0,
					},
					stats: getNeccessaryStats(data.list),
				})
			);
		} catch (error) {
			console.log(error);
		}
	};
};
