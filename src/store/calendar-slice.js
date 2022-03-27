import { createSlice } from '@reduxjs/toolkit';
import {
	getDateAndTimeInfo,
	weekDays,
	getWeekNumber,
} from '../dateAndTimeHelpers';

const { JsonCalendar } = require('json-calendar');
let calendar = new JsonCalendar();
const initialState = {
	today: getDateAndTimeInfo(),
	monthData: calendar.weeks.map((week) =>
		week.map((day) => ({
			key: day.day,
			day: day.day,
			month: day.monthIndex,
			year: day.year,
		}))
	),
	weekDays: weekDays,
	weekNumber: getWeekNumber(calendar.weeks[0][0]),
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState: initialState,
	reducers: {
		changeCalendarData(state, action) {
			// calendar = new JsonCalendar();
			state.today = action.payload.today;
			state.monthData = action.payload.data;
		},
	},
});

export default calendarSlice;
export const calendarActions = calendarSlice.actions;
