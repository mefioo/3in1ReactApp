import { createSlice } from '@reduxjs/toolkit';

const calcSlice = createSlice({
	name: 'calc',
	initialState: { displayText: '0', isChangeDisplayUsed: false },
	reducers: {
		addChar(state, action) {
			state.displayText += action.payload;
			state.isChangeDisplayUsed = false;
		},
		replaceZero(state, action) {
			state.displayText = action.payload;
			state.isChangeDisplayUsed = false;
		},
		clearDisplay(state) {
			state.displayText = '0';
			state.isChangeDisplayUsed = false;
		},
		changeDisplay(state, action) {
			state.displayText = action.payload;
			state.isChangeDisplayUsed = true;
		},
		changeLastChar(state, action) {
			state.displayText = state.displayText.slice(0, -1) + action.payload;
			state.isChangeDisplayUsed = false;
		}
	},
});

export default calcSlice;
export const calcActions = calcSlice.actions;
