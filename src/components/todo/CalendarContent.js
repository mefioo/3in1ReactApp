import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CalendarContent.module.css';
import CalendarDateElement from './CalendarDateElement';
import { todoActions } from '../../store/todo-slice';
import AddToDoModal from '../UI-helpers/AddToDoModal';

const CalendarContent = () => {
	const calendar = useSelector((state) => state.calendar);
	const todo = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	let calendarContent = [];
	let weekNumberIndex = calendar.currentMonthData.firstDayWeekNumber;

	const onDateClick = (value) => {
		const date = {
			day: value,
			month: calendar.currentMonthData.monthNumberDisplayed,
			year: calendar.currentMonthData.yearNumberDisplayed,
		};
		dispatch(todoActions.getToDoData({ date }));
	};

	calendar.currentMonthData.monthData.forEach((week) => {
		const weekNumber = (
			<CalendarDateElement
				key='weekNoInt'
				className={classes['border--right']}
				value={weekNumberIndex}
			/>
		);
		weekNumberIndex++;
		if (weekNumberIndex > 52) {
			weekNumberIndex = 1;
		}

		let weekDays = [];
		week.forEach((day) => {
			let className = '';

			if (day.month !== calendar.currentMonthData.monthNumberDisplayed) {
				className = classes['not-current-month'];
			} else if (
				calendar.today.date.day === day.day &&
				calendar.today.date.month === day.month &&
				calendar.today.date.year === day.year
			) {
				className = classes.today;
			}

			weekDays.push(
				<CalendarDateElement
					className={className}
					key={day.day}
					value={day.day}
					onClick={onDateClick}
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
			{todo.isOpen && <AddToDoModal />}
		</div>
	);
};

export default CalendarContent;
