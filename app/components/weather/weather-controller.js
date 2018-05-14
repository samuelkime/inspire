function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(drawWeather)
	function drawWeather(res){
		var template = `
		<p>Temperature: ${res.main.temp}</p>
		<p>Max Temp: ${res.main.temp_max}</p>
		<p>Min Temp: ${res.main.temp_min}</p>
		<p>${res.weather[0].description}</p>
		`
		document.getElementById('weather').innerHTML = template 

	}

}
