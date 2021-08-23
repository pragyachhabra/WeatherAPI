document.getElementById("buttonfetch").onclick = async () => {
const weatherapi = document.getElementById("myinput").value;
const data = await fetch(`https://api.openweathermap.org/data/2.5/weather
?q=${weatherapi}&units=metric&APPID=98f8e3fa984b73a9a5e3d531006ad28e`)
const data2 = await data.json()
document.getElementById("info").innerHTML = `<ul class="data" style="list-style: none;">
<li>  <h2 class="city-name">${data2.name}</h2>
<div class="city-temp">${data2.main.temp}<sup>°C</sup></div>
<figcaption>${data2.weather[0].description}</li></figcaption>
</li>
</ul>`


}
