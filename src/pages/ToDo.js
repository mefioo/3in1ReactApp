import React from 'react';
import Calendar from '../components/todo/Calendar';
import Switch from '../components/todo/Switch';
import classes from './ToDo.module.css';

const ToDo = () => {
	return (
		<div className={classes['todo-wrapper']}>
			<Switch />
			<Calendar />
		</div>
	);
};

export default ToDo;
