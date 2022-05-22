import { RegistrationButton } from './RegistrationButton'
import './App.css';
import { LoginButton } from './LoginButton';
import { Col, Container, Row } from 'react-bootstrap';

export const TopPanel = () => {

	return (
		<div className="top-panel">
			<Container className="p-2">
				<Row className="justify-content-end">
					<Col xs={3} md={4}>
						<LoginButton />
					</Col>
					<Col xs={3} md={4}>
						<RegistrationButton />
					</Col>
				</Row>
			</Container>
		</div>
	);
}


