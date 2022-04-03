import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useEffect, useState } from 'react';
import classes from './ToDos.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/todo-slice';
import { months } from '../../dateAndTimeHelpers';
import ToDosList from './ToDosList';

const defineDate = (day, month) => {
	let sufix = '';

	switch (`${day}`.slice(-1)) {
		case '1':
			sufix = 'st';
			break;
		case '2':
			sufix = 'nd';
			break;
		case '3':
			sufix = 'rd';
			break;
		default:
			sufix = 'th';
			break;
	}
	return `Your events on ${months[month]}, ${day}${sufix}:`;
};

const ToDos = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todo);
	const { day, month, year } = todos.date;

	const [isAdding, setIsAdding] = useState(false);
	const [buttonToggleFormText, setButtonToggleFormText] =
		useState('Add new event');

	const closeModalHandler = () => {
		dispatch(todoActions.closeToDoData());
	};

	const toggleFormShowHandler = () => {
		setIsAdding(!isAdding);
	};

	useEffect(() => {
		if (isAdding) {
			setButtonToggleFormText('Hide form');
		} else {
			setButtonToggleFormText('Add new event');
		}
	}, [isAdding]);

	return (
		<div className={classes.todos}>
			<FontAwesomeIcon
				onClick={closeModalHandler}
				className={classes.icon}
				icon={faXmark}
			/>
			<h3>{defineDate(day, month)}</h3>
			<div className={classes['add-todos']}>
				<button
					onClick={toggleFormShowHandler}
					className={classes.button}
					type='button'
				>
					{buttonToggleFormText}
				</button>
				{isAdding && (
					<Fragment>
						<form className={classes.form}>
							<label htmlFor='time-input'>Time</label>
							<input type='time' step='600' id='time-input'></input>
							<label>Event details</label>
							<textarea
								id='description-input'
								rows='5'
								cols='40'
								placeholder='Type in your details...'
							></textarea>
							<button className={classes.button} type='submit'>
								Add event
							</button>
						</form>
					</Fragment>
				)}
			</div>
			<ToDosList />
		</div>
	);
};

export default ToDos;
