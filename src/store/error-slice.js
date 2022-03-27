import { createSlice } from '@reduxjs/toolkit';

const noErrorState = {
	isError: false,
	errorData: { title: '', code: 0, message: '', link: ''},
};

const errorSlice = createSlice({
	name: 'error',
	initialState: noErrorState,
	reducers: {
		clearError(state) {
			state.isError = false;
			state.errorData = { title: '', code: 0, message: '' };
		},
		setError(state, action) {
			state.isError = true;
			state.errorData = action.payload;
		},
	},
});

export default errorSlice;
export const errorActions = errorSlice.actions;
