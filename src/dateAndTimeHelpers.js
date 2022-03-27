export const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export const months = [
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

export const getDateAndTimeInfo = () => {
	const date = new Date();
	const minutes =
		`${date.getMinutes()}`.length === 1
			? '0' + date.getMinutes()
			: date.getMinutes();
	const currentTime = `${date.getHours()}:${minutes}`;
	const day = weekDays[date.getDay()];
	return {
		date: { day: date.getDate(), month: months[date.getMonth()] },
		time: currentTime,
		weekDay: day,
	};
};

export const getWeekNumber = (date) => {
	const currDate = new Date(date.year, date.monthIndex, date.day);
	let firstMonday = new Date(date.year, 0, 1);
	let index = 2;

	while (firstMonday.getDay() !== 0) {
		firstMonday = new Date(date.year, 0, index);
		index++;
	}
	
	const oneJan = Date.UTC(date.year, 0, 1);
	const week = Math.ceil((currDate - oneJan) / (1000 * 60 * 60 * 24) / 7);
	return week;
};
