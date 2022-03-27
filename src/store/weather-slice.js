import { createSlice } from '@reduxjs/toolkit';
import { getDateAndTimeInfo } from '../dateAndTimeHelpers';

const initialState = {
	location: {
		city: 'Wroclaw',
		country: 'PL',
	},
	timeline: getDateAndTimeInfo(),
	todayStats: {
		overallWeather: '-',
		temp: '-',
		pressure: '-',
		windSpeed: '-',
		windDirection: '-',
		humidity: '-',
		rain: '-',
	},
	nextHoursStats: { data: { temp: [], rain: [] }, labels: [] },
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		changeWeatherData(state, action) {
			state.location = action.payload.location;
			state.basicInfo = getDateAndTimeInfo();
			state.todayStats = action.payload.todayStats;
			state.nextHoursStats = action.payload.nextHoursStats;
		},
		showNoData(state) {
			state.basicInfo = getDateAndTimeInfo();
			state.todayStats = initialState.todayStats;
			state.nextHoursStats = initialState.nextHoursStats;
		},
	},
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
