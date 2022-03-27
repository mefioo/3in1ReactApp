import { configureStore } from '@reduxjs/toolkit';
import calcSlice from './calc-slice';
import calendarSlice from './calendar-slice';
import errorSlice from './error-slice';
import weatherSlice from './weather-slice';

const store = configureStore({
	reducer: {
		calc: calcSlice.reducer,
		calendar: calendarSlice.reducer,
		error: errorSlice.reducer,
		weather: weatherSlice.reducer,
	},
});

export default store;
