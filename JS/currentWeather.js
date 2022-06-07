// current weather @ Alex :)
import fetch from 'node-fetch';
import WEATHER_API_KEY_ALEX from './alexKey&Bones.js';
// fetching the api with then
// fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=WEATHER_API_KEY_ALEX')
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// });

// using async because the current weather need to appear automatycally
async function fetchDataCurrentWeather(info){
    let allDataCurrentWeather = await fetch(info);
    let allDataCurrentWeatherJson = await  allDataCurrentWeather.json();

    return allDataCurrentWeatherJson;
};
// check if CW 7 3t5 use the same lat & long to obtain the data
// long  & lat are determined by the Search Bar api
let latitude = '51.5085';
let longitude = '-0.1257';
let key = Object.values(WEATHER_API_KEY_ALEX);

const rawCurrentWeatherData = await fetchDataCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}&units=metric`);

console.log(rawCurrentWeatherData);
// weather-main its an array of objects, need to be maped
let currentWeather = rawCurrentWeatherData && rawCurrentWeatherData.weather ? rawCurrentWeatherData.weather[0].main : null;
// main-temp & main-feels_like & main-humidity
let currentTemp = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.temp : null;
let curentTempFeelsLike = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.feels_like : null;
let currtenHumidity = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.humidity : null;
// wind-deg && wind-speed
let currentWindDirection = rawCurrentWeatherData && rawCurrentWeatherData.wind ? rawCurrentWeatherData.wind.deg : null;
let currentWindSpeed = rawCurrentWeatherData && rawCurrentWeatherData.wind ? rawCurrentWeatherData.wind.speed : null;
// create the rest of the variables
let nameCity = rawCurrentWeatherData.name;
let currentVisibility = rawCurrentWeatherData.visibility;
// create the object of the CW info
let currentWeatherData = [];
currentWeatherData.push(nameCity);
currentWeatherData.push(currentTemp);
currentWeatherData.push(currentWeather);
currentWeatherData.push(curentTempFeelsLike);
currentWeatherData.push(currentWindDirection);
currentWeatherData.push(currentWindSpeed);
currentWeatherData.push(currentVisibility);
currentWeatherData.push(currtenHumidity);
console.log(currentWeatherData);