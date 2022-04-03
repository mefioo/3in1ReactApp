import React from 'react';
import classes from './ToDoElement.module.css';

const ToDoElement = (props) => {
	return (
		<li className={classes.item} key={props.key}>
			<p>{props.time}</p>
			<p>{props.description}</p>
		</li>
	);
};

export default ToDoElement;
