import React, { useState } from 'react';
import classes from './Switch.module.css';

const Switch = (props) => {
	const [isWeekly, setIsWeekly] = useState(false);

	const changeWeeklyHandler = () => {
		setIsWeekly(true);
	};

	const changeMonthlyHandler = () => {
		setIsWeekly(false);
	};

	return (
		<div className={classes.switch}>
			<button
				className={isWeekly ? classes.active : ''}
				onClick={changeWeeklyHandler}
			>
				Weekly
			</button>
			<button
				className={isWeekly ? '' : classes.active}
				onClick={changeMonthlyHandler}
			>
				Monthly
			</button>
		</div>
	);
};

export default Switch;
