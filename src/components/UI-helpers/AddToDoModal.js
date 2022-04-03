import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ToDos from '../todo/ToDos';
import OpacityOverlay from './OpacityOverlay';

const AddToDoModal = () => {
	return ReactDOM.createPortal(
		<Fragment>
			<OpacityOverlay />
			<ToDos />
		</Fragment>,
		document.getElementById('modal-placeholder')
	);
};

export default AddToDoModal;
