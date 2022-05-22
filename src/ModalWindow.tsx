import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const url = 'https://localhost:7019/api/Account';
interface IShow {
	showBool: boolean;
	toShow: () => void;

}
export const ModalWindow = ({ showBool, toShow }: IShow) => {


	return (
		<>
			<Button variant="success col-12" onClick={toShow}>
				Login
			</Button>

			<Modal show={showBool} onHide={toShow}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={toShow}>
						Close
					</Button>
					<Button variant="primary" onClick={toShow}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}