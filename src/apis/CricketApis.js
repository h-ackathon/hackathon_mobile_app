import axios from 'axios';

export default axios.create({
	baseURL: 'http://127.0.0.1:8008/api/'
	// baseURL: 'http://192.168.43.226:8008/api/'
});