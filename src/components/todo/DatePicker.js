import React, { useEffect, useState } from 'react';
import classes from './DatePicker.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import PickerOptions from './PickerOptions';

const DatePicker = (props) => {
	const calendar = useSelector((state) => state.calendar.currentMonthData);

	const [years, setYears] = useState([]);

	useEffect(() => {
		const year = calendar.yearNumberDisplayed;
		const initialYears = [...Array(12).keys()].map(
			(key) => parseInt(key) + parseInt(year) - 6
		);
		setYears(initialYears);
	}, [calendar.yearNumberDisplayed]);

	const dataPickHandler = (pick) => {
		if (pick) {
			props.datePicker(true);
		}
	};

	return (
		<div className={classes.picker}>
			<FontAwesomeIcon className={classes.icon} icon={faAngleLeft} />
			<div className={classes.dates}>
				<PickerOptions onPick={dataPickHandler} values={years} />
			</div>
			<FontAwesomeIcon className={classes.icon} icon={faAngleRight} />
		</div>
	);
};

export default DatePicker;
