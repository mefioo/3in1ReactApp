import React from 'react';
import { useSelector } from 'react-redux';
import { months } from '../../dateAndTimeHelpers';
import classes from './CalendarContent.module.css';
import CalendarDateElement from './CalendarDateElement';

const CalendarContent = () => {
	const calendar = useSelector((state) => state.calendar);
	const calendarContent = [];
	let weekNumberIndex = calendar.weekNumber;
	calendar.monthData.forEach((week) => {
		const weekNumber = (
			<CalendarDateElement
				key='weekNoInt'
				className={classes['border--right']}
				value={weekNumberIndex}
			/>
		);
		weekNumberIndex++;

		let weekDays = [];
		week.forEach((day) => {
			let className = '';

			if (day.month !== months.indexOf(calendar.today.date.month)) {
				className = classes['not-current-month'];
			}

			weekDays.push(
				<CalendarDateElement
					className={className}
					key={day.day}
					value={day.day}
				/>
			);
		});
		calendarContent.push([weekNumber, ...weekDays]);
	});
	const weekNumber = (
		<CalendarDateElement
			key='weekNoDesc'
			className={classes['border--right']}
			value='Week no.'
		/>
	);
	const description = [
		weekNumber,
		...calendar.weekDays.map((day) => (
			<CalendarDateElement key={day} value={day} />
		)),
	];

	return (
		<div className={classes.content}>
			{description}
			{calendarContent}
		</div>
	);
};

export default CalendarContent;
