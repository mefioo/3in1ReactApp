import React, { Fragment } from 'react';
import ErrorMessage from './ErrorMessage';
import OpacityOverlay from './OpacityOverlay';

const ErrorModal = () => {
	return (
		<Fragment>
			<OpacityOverlay />
			<ErrorMessage />
		</Fragment>
	);
};

export default ErrorModal;
