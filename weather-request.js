require("dotenv").config();
const request = require("request");

const API_KEY = process.env.API_KEY;
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=fr&q=`;

function getWeatherData(city, callback) {
  const url = BASE_URL + city;
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const weatherData = JSON.parse(body);
      callback(null, {
        description: weatherData.weather[0].description,
        temperature: weatherData.main.temp,
        humidite: weatherData.main.humidity,
      });
    }
  });
}


getWeatherData("Mahdia", (err, data) => {
  if (err) console.error("Erreur :", err);
  else console.log("Météo à Mahdia :", data);
});
