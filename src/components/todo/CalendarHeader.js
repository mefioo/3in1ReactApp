import React from 'react';
import classes from './CalendarHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CalendarHeader = () => {
	return (
		<div className={classes['calendar__header']}>
			<FontAwesomeIcon className={classes.icon} icon={faAngleLeft} />
			<p>March, 2022</p>
			<FontAwesomeIcon className={classes.icon} icon={faAngleRight} />
		</div>
	);
};

export default CalendarHeader;
