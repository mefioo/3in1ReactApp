import React from 'react';

const CalendarDateElement = (props) => {
	const addToDoHandler = () => {
		props.onClick(props.value);
	};

	return (
		<div onClick={addToDoHandler} className={props.className}>
			<p>{props.value}</p>
		</div>
	);
};

export default CalendarDateElement;
