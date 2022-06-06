import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { RegistationOrLoginButton } from './RegistationOrLoginButton';

export const TopPanel = () => {

	return (
		<div className="top-panel">
			<Container className="p-2">
				<Row className="justify-content-end">
					<RegistationOrLoginButton />
				</Row>
			</Container>
		</div>
	);
}


