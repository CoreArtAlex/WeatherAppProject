// current weather @ Alex :)
import WEATHER_API_KEY_ALEX from './alexKey&Bones.js';

// using async because the current weather need to appear automatycally
async function fetchDataCurrentWeather(info){
    let allDataCurrentWeather = await fetch(info);
    let allDataCurrentWeatherJson = await  allDataCurrentWeather.json();

    return allDataCurrentWeatherJson;
};

let latitude = '49.246292';
let longitude = '-123.116226';
let key = Object.values(WEATHER_API_KEY_ALEX);
// --------------------------------------------------------------
// Search Bar & Autocomplete
let input = document.getElementById("input");
let newCity = new google.maps.places.Autocomplete(input);

if(newCity){
  newCity.addListener('place_changed',getNewPlace);

  async function getNewPlace(){
    let newCityData = newCity.getPlace();
    if(!newCityData.geometry){
      console.log("Enter a Real City");
    }else{
      latitude = newCityData.geometry.location.lat();
      longitude = newCityData.geometry.location.lng();
      let rawNewCityData = await fetchDataCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}&units=metric`);
      console.log(rawNewCityData);

      let newWeather = rawNewCityData && rawNewCityData.weather ? rawNewCityData.weather[0].main : null;
      let newTemp = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.temp : null;
      let newTempFeelsLike = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.feels_like : null;
      let newHumidity = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.humidity : null;
      let newWindDirection = rawNewCityData && rawNewCityData.wind ? rawNewCityData.wind.deg : null;
      let newWindSpeed = rawNewCityData && rawNewCityData.wind ? rawNewCityData.wind.speed : null;
      let newNameCity = rawNewCityData.name;
      let newVisibility = rawNewCityData.visibility;

      let newtWeatherData = [];
      newtWeatherData.push(newNameCity);
      newtWeatherData.push(newTemp);
      newtWeatherData.push(newWeather);
      newtWeatherData.push(newTempFeelsLike);
      newtWeatherData.push(newWindDirection);
      newtWeatherData.push(newWindSpeed);
      newtWeatherData.push(newVisibility);
      newtWeatherData.push(newHumidity);

      console.log(newtWeatherData);

      document.getElementById("city-name").innerHTML = newtWeatherData[0];
      document.getElementById("main-temp").innerHTML = newtWeatherData[1];
      document.getElementById("current-condition").innerHTML = newtWeatherData[2];
      document.getElementById("feels-like").innerHTML = "Feels Like:" + newtWeatherData[3];
      document.getElementById("wind-degree").innerHTML = "Wind Degree:" + newtWeatherData[4];
      document.getElementById("wind-speed").innerHTML = "Wind Speed:" + newtWeatherData[5];
      document.getElementById("visibility").innerHTML = "Visibility:" + newtWeatherData[6];
      document.getElementById("humidity").innerHTML = "Humidity:" + newtWeatherData[7];      

    }
  }
}else{
  latitude = '49.246292';
  longitude = '-123.116226';
}

const rawCurrentWeatherData = await fetchDataCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}&units=metric`);

console.log(rawCurrentWeatherData);
// gather all the variables from the api
let currentWeather = rawCurrentWeatherData && rawCurrentWeatherData.weather ? rawCurrentWeatherData.weather[0].main : null;
let currentTemp = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.temp : null;
let curentTempFeelsLike = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.feels_like : null;
let currtenHumidity = rawCurrentWeatherData && rawCurrentWeatherData.main ? rawCurrentWeatherData.main.humidity : null;
let currentWindDirection = rawCurrentWeatherData && rawCurrentWeatherData.wind ? rawCurrentWeatherData.wind.deg : null;
let currentWindSpeed = rawCurrentWeatherData && rawCurrentWeatherData.wind ? rawCurrentWeatherData.wind.speed : null;
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

//--------------------------------------------------------------------
// create Current Weather in HTML
document.getElementById("city-name").innerHTML = currentWeatherData[0];
document.getElementById("main-temp").innerHTML = currentWeatherData[1];
document.getElementById("current-condition").innerHTML = currentWeatherData[2];
document.getElementById("feels-like").innerHTML = "Feels Like:" + currentWeatherData[3];
document.getElementById("wind-degree").innerHTML = "Wind Degree:" + currentWeatherData[4];
document.getElementById("wind-speed").innerHTML = "Wind Speed:" + currentWeatherData[5];
document.getElementById("visibility").innerHTML = "Visibility:" + currentWeatherData[6];
document.getElementById("humidity").innerHTML = "Humidity:" + currentWeatherData[7];
