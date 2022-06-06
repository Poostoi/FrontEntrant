import axios from "axios";
const url = 'https://25.14.24.163:7019/api';
interface IAxios {
	method: string,
	urlMethod: string,
	data: {},
	errorMethod: (e: string) => void
}
export const MethodAxios = ({ method, urlMethod, data, errorMethod }: IAxios) => {
	console.log('method: ' + method + '\n urlMethod: ' + urlMethod + '\ndata: ' + data);
	axios({
		method: method,
		url: url + '/' + urlMethod,
		data: data
	})
		.then(responce => console.log(responce))
		.catch(error => {
			console.log(error);
			errorMethod(error.message);
		});
}