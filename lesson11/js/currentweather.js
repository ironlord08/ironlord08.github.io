let apiURL = ""
if (document.querySelector(".active").textContent == "Preston"){
  apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
}
else if (document.querySelector(".active").textContent == "Soda Springs"){
  apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
}
else if (document.querySelector(".active").textContent == "Fish Haven"){
  apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
}
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('current').textContent = desc
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('windSpeed').textContent = jsObject.wind.speed

    // Windchill
    let t = parseFloat(document.querySelector("#temp").textContent)
    let s = parseFloat(document.querySelector("#windSpeed").textContent)
    let f
    if (t <= 50 && s >= 3) {
      f = Math.round(35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16))
    } else {
      f = "N/A"
    }
    document.querySelector("#windChill").textContent = f

  });