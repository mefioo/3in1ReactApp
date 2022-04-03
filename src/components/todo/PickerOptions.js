import React, { Fragment, useEffect } from 'react';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { months } from '../../dateAndTimeHelpers';
import { changeMonthData } from '../../store/calendar-actions';

const initialState = { year: '', month: '' };

const datePickerReducer = (state, action) => {
	switch (action.type) {
		case 'years':
			return { year: action.year, month: state.month };
		case 'months':
			return { year: state.year, month: action.month };
		case 'reset':
			return { year: '', month: '' };
		default:
			throw new Error('Something went wrong!');
	}
};

const PickerOptions = (props) => {
	const [datePickerState, dispatchDatePicker] = useReducer(
		datePickerReducer,
		initialState
	);
	const dispatch = useDispatch();

	const elementSelectHandler = (event) => {
		if (datePickerState.year === '') {
			dispatchDatePicker({ type: 'years', year: event.target.value });
		} else if (datePickerState.month === '') {
			dispatchDatePicker({ type: 'months', month: event.target.value });
		}
	};

	useEffect(() => {
		const { year, month } = datePickerState;
		if (year !== '' && month === '') {
			props.setArrowsShow(false);
		}
		if (month !== '') {
			dispatch(changeMonthData(months.indexOf(month), year));
			props.onPick(true);
			props.setArrowsShow(true);
		}
	}, [datePickerState, dispatch, props]);

	const yearsContent = props.values.map((element) => (
		<button value={element} onClick={elementSelectHandler} key={element}>
			{element}
		</button>
	));
	const monthsContent = months.map((month) => (
		<button key={month} value={month} onClick={elementSelectHandler}>
			{month}
		</button>
	));

	const content = datePickerState.year === '' ? yearsContent : monthsContent;

	return <Fragment>{content}</Fragment>;
};

export default PickerOptions;
