import React from 'react';
import { useSelector } from 'react-redux';
import ToDoElement from './ToDoElement';
import classes from './ToDosList.module.css';

const ToDosList = () => {
	const todos = useSelector((state) => state.todo.todos);
	const items = todos.map((item, index) => (
		<ToDoElement description={item.description} time={item.time} key={index} />
	));
	return (
		<ul className={classes['todos-list']}>
			{items.length === 0 ? <p>No events on this day</p> : items}
		</ul>
	);
};

export default ToDosList;
