import axios from "axios";
const url = 'https://localhost:7019/api/Account';
interface IAxios {
	method: string,
	urlMethod: string,
	data: {}
}
export const LoginMethod = ({ method, urlMethod, data }: IAxios) => {
	axios({
		method: method,
		url: url + '/' + urlMethod,
		data: data
	}).then(responce => console.log(responce));
}