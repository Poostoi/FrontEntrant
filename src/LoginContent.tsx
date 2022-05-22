import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const url = 'https://localhost:7019/api/Account';
interface IShow {
	showBool: boolean;
	toShow: () => void;
}
export const ModalWindow = ({ showBool, toShow }: IShow) => {

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
				<Modal.Title>Авторизация</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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