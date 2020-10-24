let t = parseFloat(document.querySelector("#temp").textContent)
let s = parseFloat(document.querySelector("#windSpeed").textContent)
let f
if (t <= 50 && s >= 3){
    f = Math.round(35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16))
}
else{
    f = "N/A"
}
document.querySelector("#windChill").textContent = f
