let apiURLforecast = ""
if (document.querySelector(".active").textContent == "Preston") {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
} else if (document.querySelector(".active").textContent == "Soda Springs") {
    apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
} else if (document.querySelector(".active").textContent == "Fish Haven") {
    apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
}
// const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        let day = 1
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day}`).textContent = Math.round(x.main.temp)
            document.getElementById(`wicon${day}`).setAttribute("src", imagesrc)
            document.getElementById(`wicon${day}`).setAttribute("alt", x.weather[0].description)
            day++
        });

    });