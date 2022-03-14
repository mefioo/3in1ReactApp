import { configureStore } from '@reduxjs/toolkit';
import calcSlice from './calc';

const store = configureStore({
	reducer: { calc: calcSlice.reducer },
});

export default store;
