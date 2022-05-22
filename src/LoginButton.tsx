import { useState } from 'react';
import { ModalLogin } from './ModalLogin';

export const LoginButton = () => {
	const [show, setShow] = useState(false);
	const toShow = () => {
		setShow(!show);
	}


	return (
		<div>
			<ModalLogin showBool={show}
				toShow={toShow} />
		</div>
	);
}