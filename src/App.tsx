import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

export const App = () => {
	useEffect(() => {
		const url = 'https://localhost:7019/api/Account';
		/* axios({
			method: 'post',
			url: url + '/Registration',
			data: {
				"login": "string1",
				"password": "string"
			}
		}).then(responce => console.log(responce)); */
		axios({
			method: 'post',
			url: url + '/Login',
			data: {
				"login": "string1",
				"password": "string"
			}
		}).then(responce => console.log(responce));
	})
	return (
		<div className="App">

		</div>
	);
}


