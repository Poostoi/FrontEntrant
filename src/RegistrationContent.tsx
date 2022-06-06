import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const url = 'https://localhost:7019/api/Account';
interface IShow {
	showBool: boolean;
	toShow: () => void;
	nameModal: string
}
export const RegistrationContent = ({ showBool, toShow, nameModal }: IShow) => {

	const login = () => {
		axios({
			method: 'post',
			url: url + '/Login',
			data: {
				"login": "string1",
				"password": "string"
			}
		}).then(responce => console.log(responce));
	}
	return (
		<>


			<Modal.Header closeButton>
				<Modal.Title>{nameModal}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={toShow}>
					Закрыть
				</Button>
				<Button variant="primary" onClick={toShow}>
					Войти
				</Button>
			</Modal.Footer>

		</>
	);
}