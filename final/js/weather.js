const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=hourly&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        try {
            document.getElementById('alertName').textContent = jsObject.alerts.sender_name
            document.getElementById('alertTitle').textContent = jsObject.alerts.event
            document.getElementById('alertDesc').textContent = jsObject.alerts.description
            document.getElementsByClassName("message")[0].classList.toggle("unhide")
        }
        catch{}
        
        const desc = jsObject.current.weather[0].description;
        document.getElementById('current').textContent = desc
        document.getElementById('temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('humidity').textContent = jsObject.current.humidity
        
        const forecast = jsObject.daily.slice(0,3);
        let day = 1
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        forecast.forEach(x => {
            const d = new Date(x.dt * 1000);
            const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day}`).textContent = Math.round(x.temp.day)
            document.getElementById(`wicon${day}`).setAttribute("src", imagesrc)
            document.getElementById(`wicon${day}`).setAttribute("alt", x.weather[0].description)
            day++
        });

    });