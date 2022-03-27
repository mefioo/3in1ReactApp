import React from 'react';
import classes from './Calendar.module.css';
import CalendarContent from './CalendarContent';
import CalendarHeader from './CalendarHeader';

const Calendar = () => {
	return (
		<div className={classes.calendar}>
			<CalendarHeader />
			<CalendarContent />
		</div>
	);
};

export default Calendar;
