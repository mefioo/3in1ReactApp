import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorActions } from '../../store/error-slice';
import { todoActions } from '../../store/todo-slice';
import classes from './OpacityOverlay.module.css';

const OpacityOverlay = () => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);
	const todo = useSelector((state) => state.todo);

	const overlayClickHandler = () => {
		if (error.isError) {
			dispatch(errorActions.clearError());
		}
		if (todo.isOpen) {
			dispatch(todoActions.closeToDoData());
		}
	};

	return <div onClick={overlayClickHandler} className={classes.overlay}></div>;
};

export default OpacityOverlay;
