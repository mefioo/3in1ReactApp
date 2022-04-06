import React, { Fragment } from 'react';
import ApiKeyForm from './ApiKeyForm';
import OpacityOverlay from './OpacityOverlay';

const ApiKeyModal = () => {
	return (
		<Fragment>
			<OpacityOverlay />
			<ApiKeyForm />
		</Fragment>
	);
};

export default ApiKeyModal;
