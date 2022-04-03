import React, { useState } from 'react';
import classes from './DatePicker.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import PickerOptions from './PickerOptions';

const DatePicker = (props) => {
	const today = useSelector((state) => state.calendar.today);

	const initialYears = [...Array(12).keys()].map(
		(key) => key + parseInt(today.date.year) - 6
	);

	const [years, setYears] = useState(initialYears);
	const [showArrows, setShowArrows] = useState(true);

	const dataPickHandler = (pick) => {
		if (pick) {
			props.datePicker(true);
		}
	};

	const previousYearsHandler = () => {
		const newYears = years.map((year) => year - 12);
		setYears(newYears);
	};

	const nextYearsHandler = () => {
		const newYears = years.map((year) => year + 12);
		setYears(newYears);
	};

	const changePickingDateStageHandler = (isFirstStage) => {
		setShowArrows(isFirstStage);
	};

	return (
		<div className={classes.picker}>
			{showArrows && (
				<FontAwesomeIcon
					onClick={previousYearsHandler}
					className={classes.icon}
					icon={faAngleLeft}
				/>
			)}
			<div className={classes.dates}>
				<PickerOptions
					setArrowsShow={changePickingDateStageHandler}
					onPick={dataPickHandler}
					values={years}
				/>
			</div>
			{showArrows && (
				<FontAwesomeIcon
					onClick={nextYearsHandler}
					className={classes.icon}
					icon={faAngleRight}
				/>
			)}
		</div>
	);
};

export default DatePicker;
