class TemplateProcessor{
	render(data){
		let now = new Date();
		document.getElementById('current_date').innerHTML = now.getDate()+"."+now.getMonth()+"."+now.getFullYear();
		document.getElementById('degrees_from').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;';
		document.getElementById('degrees_to').innerHTML = Math.round(data.main.temp_max - 273) + '&deg;';
		document.getElementById('humidity').innerHTML = 'Влажность'+Math.round(data.main.humidity) + '%';
	}
}
export default TemplateProcessor;