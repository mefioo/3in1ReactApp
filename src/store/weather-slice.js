import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	today: '',
	stats: { data: { temp: [], rain: [] }, labels: [] },
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		changeWeatherData(state, action) {
			state.today = action.payload.today;
			state.stats = action.payload.stats;
		},
	},
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
