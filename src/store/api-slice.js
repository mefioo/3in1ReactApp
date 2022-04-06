import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
	name: 'api',
	initialState: { apiKey: '', isSkipped: false },
	reducers: {
		changeApiKey(state, action) {
			state.apiKey = action.payload.apiKey;
		},
		setSkipped(state, action) {
			state.isSkipped = action.payload.isSkipped;
		},
	},
});

export default apiSlice;
export const apiActions = apiSlice.actions;
