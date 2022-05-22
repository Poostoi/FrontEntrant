import React, { useState } from 'react';
import { ModalRegistration } from './ModalRegistration';

export const RegistrationButton = () => {
	const [show, setShow] = useState(false);
	const toShow = () => {
		setShow(!show);
	}


	return (
		<div>
			<ModalRegistration showBool={show}
				toShow={toShow} />
		</div>
	);
}