import 'fetch';

const baseUrl = "http://localhost:3000";

var get = function(which) {
		let url = `${baseUrl}/blijdorp/data/${which}.json`;
		return fetch(url).then(response => {
				if ( response.status == 200 ) {
						return response.json();
				}
				return null;
		});
};

var query = function(q) {
		let body = JSON.stringify({query: q});
		return fetch('http://localhost:8080/graphql', {
				method: 'POST',
				headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
				},
				body: body,
				mode: 'cors'
		}).then(response => response.json());
};

export { get, query }
