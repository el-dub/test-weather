class Client {
	getData(city = 'London'){
		return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6a1ded3634dd3363780a5be81bcb6571')
	            .then(response => response.json());
	}
}

export default Client;