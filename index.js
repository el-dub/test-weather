'use strict'
import Client from './client.js';
import TemplateProcessor from './templateProcessor.js';

const client = new Client();
const templateProcessor = new TemplateProcessor();

(client.getData().then(
		(data) =>{
			templateProcessor.render(data);
		});
document.querySelector('weather-wrapper').style.background = 'red';)()


/*function getData(city = 'London'){
	return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6a1ded3634dd3363780a5be81bcb6571')
            .then(response => response.json());
}*/
// function render(data){
// 	let now = new Date();
// 	document.getElementById('current_date').innerHTML = now.getDate()+"."+now.getMonth()+"."+now.getFullYear();
// 	document.getElementById('degrees_from').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;';
// 	document.getElementById('degrees_to').innerHTML = Math.round(data.main.temp_max - 273) + '&deg;';
// 	document.getElementById('humidity').innerHTML = 'Влажность'+Math.round(data.main.humidity) + '%';
// }