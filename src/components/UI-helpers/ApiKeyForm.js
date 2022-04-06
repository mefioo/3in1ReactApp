import React, { useRef } from 'react';
import classes from './ErrorMessage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { apiActions } from '../../store/api-slice';

const ApiKeyForm = () => {
	const dispatch = useDispatch();
	const apiRef = useRef();

	const closeModalHandler = () => {
		dispatch(apiActions.setSkipped({ isSkipped: true }));
	};

	const submitApiKeyHandler = (event) => {
		event.preventDefault();
		dispatch(apiActions.changeApiKey({ apiKey: apiRef.current.value }));
	};

	return (
		<div className={classes.error}>
			<div className={classes.exit}>
				<FontAwesomeIcon
					onClick={closeModalHandler}
					className={classes.icon}
					icon={faXmark}
				/>
			</div>
			<h2>Set you API key</h2>
			<p>
				To enable weather feature, please provide your API key. To get one,
				follow the instructions under
				<a href='https://openweathermap.org/api'> this link</a>.
			</p>
			<form className={classes.form}>
				<input
					ref={apiRef}
					type='text'
					placeholder='Insert your api key here...'
				></input>
				<div className={classes.controls}>
					<button onClick={submitApiKeyHandler} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ApiKeyForm;
