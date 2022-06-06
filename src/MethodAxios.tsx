import axios from "axios";
const url = 'https://localhost:7019/api';
interface IAxios {
	method: string,
	urlMethod: string,
	data: {}
}
export const MethodAxios = ({ method, urlMethod, data }: IAxios) => {
	console.log('method: ' + method + '\n urlMethod: ' + urlMethod + '\ndata: ' + data);
	axios({
		method: method,
		url: url + '/' + urlMethod,
		data: data
	})
		.then(responce => console.log(responce))
		.catch(error => console.log(error));
}