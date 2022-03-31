import React, { useState } from 'react';
import classes from './CalendarHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { months } from '../../dateAndTimeHelpers';
import DatePicker from './DatePicker';
import { increaseOrDecreaseMonthNumber } from '../../store/calendar-actions';

const CalendarHeader = () => {
	const calendar = useSelector((state) => state.calendar);
	const dispatch = useDispatch();
	const [isDateExpanded, setIsDateExpanded] = useState(false);

	const previousMonthHandler = () => {
		dispatch(increaseOrDecreaseMonthNumber(false, calendar.currentMonthData));
	};

	const nextMonthHandler = () => {
		dispatch(increaseOrDecreaseMonthNumber(true, calendar.currentMonthData));
	};

	const chooseDateHandler = () => {
		setIsDateExpanded(true);
	};

	const datePickerHandler = (isPicked) => {
		if (isPicked) {
			setIsDateExpanded(false);
		}
	};

	return (
		<div className={classes['calendar__header']}>
			<FontAwesomeIcon
				className={classes.icon}
				onClick={previousMonthHandler}
				icon={faAngleLeft}
			/>
			<p onClick={chooseDateHandler}>
				{months[calendar.currentMonthData.monthNumberDisplayed]},{' '}
				{calendar.currentMonthData.yearNumberDisplayed}
			</p>
			{isDateExpanded && <DatePicker datePicker={datePickerHandler} />}
			<FontAwesomeIcon
				className={classes.icon}
				onClick={nextMonthHandler}
				icon={faAngleRight}
			/>
		</div>
	);
};

export default CalendarHeader;
