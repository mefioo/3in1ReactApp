import { configureStore } from '@reduxjs/toolkit';
import calcSlice from './calc-slice';
import weatherSlice from './weather-slice';

const store = configureStore({
	reducer: { calc: calcSlice.reducer, weather: weatherSlice.reducer },
});

export default store;
