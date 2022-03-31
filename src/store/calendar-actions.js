import {
	getCalendarData,
	getWeekNumber,
	transformCalendarMonthData,
} from '../dateAndTimeHelpers';
import { calendarActions } from './calendar-slice';

export const increaseOrDecreaseMonthNumber = (increase, currentMonthData) => {
	return (dispatch) => {
		const changeMonthNumber = increase ? 1 : -1;
		let monthNum = currentMonthData.monthData[3][0].month;
		let year = currentMonthData.yearNumberDisplayed;

		switch (monthNum) {
			case 0:
				if (!increase) {
					monthNum = 11;
					year--;
					break;
				}
				monthNum += changeMonthNumber;
				break;
			case 11:
				if (increase) {
					monthNum = 0;
					year++;
					break;
				}
				monthNum += changeMonthNumber;
				break;
			default:
				monthNum += changeMonthNumber;
				break;
		}

		const data = getCalendarData({
			today: new Date(year, monthNum, 1),
		});

		const monthData = {
			monthNumberDisplayed: monthNum,
			yearNumberDisplayed: year,
			data: transformCalendarMonthData(data.weeks),
			firstDayWeekNumber: getWeekNumber(data.weeks[0][1]),
		};

		dispatch(calendarActions.changeCalendarData(monthData));
	};
};

export const changeMonthData = (month, year) => {
	return (dispatch) => {
		const data = getCalendarData({
			today: new Date(year, month, 1),
		});

		const monthData = {
			monthNumberDisplayed: month,
			yearNumberDisplayed: year,
			data: transformCalendarMonthData(data.weeks),
			firstDayWeekNumber: getWeekNumber(data.weeks[0][1]),
		};

		dispatch(calendarActions.changeCalendarData(monthData));
	};
};
