import React from 'react';

const CalendarDateElement = (props) => {
	return (
		<div className={props.className}>
			<p>{props.value}</p>
		</div>
	);
};

export default CalendarDateElement;
