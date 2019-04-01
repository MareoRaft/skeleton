import React from 'react';

const Validation = props => {
	const validation_message = (props.content.length >= 5) ?
		'text long enough' :
		'text too short';
	return (
		<div>
			{validation_message}
		</div>
	);
};

export default Validation;
