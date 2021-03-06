import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorActions } from '../../store/error-slice';
import { todoActions } from '../../store/todo-slice';
import { apiActions } from '../../store/api-slice';
import classes from './OpacityOverlay.module.css';

const OpacityOverlay = () => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);
	const todo = useSelector((state) => state.todo);
	const api = useSelector((state) => state.api);

	const overlayClickHandler = () => {
		if (error.isError) {
			dispatch(errorActions.clearError());
		}
		if (todo.isOpen) {
			dispatch(todoActions.closeToDoData());
		}
		if (!api.isSkipped) {
			dispatch(apiActions.setSkipped({ isSkipped: true }));
		}
	};

	return <div onClick={overlayClickHandler} className={classes.overlay}></div>;
};

export default OpacityOverlay;
