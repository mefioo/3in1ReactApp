import { createSlice } from '@reduxjs/toolkit';
import {
	getDateAndTimeInfo,
	weekDays,
	getWeekNumber,
	getCalendarData,
	transformCalendarMonthData,
} from '../dateAndTimeHelpers';

const calendar = getCalendarData();
const initialState = {
	today: getDateAndTimeInfo(),
	currentMonthData: {
		monthData: transformCalendarMonthData(calendar.weeks),
		firstDayWeekNumber: getWeekNumber(calendar.weeks[0][0]),
		monthNumberDisplayed: getDateAndTimeInfo().date.month,
		yearNumberDisplayed: getDateAndTimeInfo().date.year,
	},
	weekDays: weekDays,
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState: initialState,
	reducers: {
		changeCalendarData(state, action) {
			state.currentMonthData.monthData = action.payload.data;
			state.currentMonthData.monthNumberDisplayed =
				action.payload.monthNumberDisplayed;
			state.currentMonthData.yearNumberDisplayed =
				action.payload.yearNumberDisplayed;
			state.currentMonthData.firstDayWeekNumber =
				action.payload.firstDayWeekNumber;
		},
	},
});

export default calendarSlice;
export const calendarActions = calendarSlice.actions;
