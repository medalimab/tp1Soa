require("dotenv").config();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=fr&q=`;

async function getWeatherData(city) {
  try {
    const response = await fetch(BASE_URL + city);
    const data = await response.json();
    console.log("Météo à", city, ":", {
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidite: data.main.humidity,
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}


getWeatherData("Mahdia");
