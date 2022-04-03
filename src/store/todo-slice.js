import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
	date: { day: '', month: '', year: '' },
	todos: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		getToDoData(state, action) {
			state.isOpen = true;
			state.date = action.payload.date;
            state.todos = [{time: '19:50', description: 'Some dummy description'}]
		},
		closeToDoData(state) {
			state.isOpen = false;
			state.date = { day: '', month: '', year: '' };
			state.todos = [];
		},
	},
});

export default todoSlice;
export const todoActions = todoSlice.actions;
