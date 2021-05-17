// json-server db.json --port 8000

import axios from 'axios';

const URL = 'http://localhost:8000';

export default axios.create({
	baseURL: URL,
	params: {
		_limit: 65,
	},
	timeout: 3000,

});
