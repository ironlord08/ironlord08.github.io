const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('current').textContent = desc
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('windSpeed').textContent = jsObject.wind.speed
    
  });