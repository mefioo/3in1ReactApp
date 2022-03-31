import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import classes from './LocationForm.module.css';
import { getWeatherData } from '../../store/weather-actions';

const LocationForm = () => {
	const city = useRef();
	const dispatch = useDispatch();

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(getWeatherData(city.current.value));
	};

	return (
		<div className={classes['form-wrapper']}>
			<form className={classes.form} onSubmit={submitHandler}>
				<label htmlFor='city'>Choose your city</label>
				<input id='city' ref={city}></input>
				<div className={classes.controls}>
					<button type='submit'>Show weather</button>
				</div>
			</form>
		</div>
	);
};

export default LocationForm;
