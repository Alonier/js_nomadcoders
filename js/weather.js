import { WEATHER_API_KEY } from "../values.js";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = data.main.temp;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
