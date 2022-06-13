// current weather @ Alex :)
// import WEATHER_API_KEY_ALEX from './alexKey&Bones.js';
import { default as WEATHER_API_KEY_ALEX } from './APIKey.js'
import getFiveThreeData from './fiveThreeData.js'
import createHourCards from "./hourcardCreator.js"

let newtWeatherData;

const assignDayValues = (dayNumber, dayObject) => {
  document.querySelector(`#day-${dayNumber}-hi`).innerHTML = dayObject.dayHigh
  document.querySelector(`#day-${dayNumber}-low`).innerHTML = dayObject.dayLow
  document.querySelector(`#day-${dayNumber}-day`).innerHTML = dayObject.day
  document.querySelector(`#day-${dayNumber}-date`).innerHTML = dayObject.date
  document.querySelector(`#day-${dayNumber}-description`).innerHTML = capitalize(Object.values(dayObject)[4].description)
  document.querySelector(`#day-${dayNumber}-icon`).setAttribute('src', `http://openweathermap.org/img/wn/${Object.values(dayObject)[4].icon}@2x.png`)
}

const assignHourValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    document.querySelector(`#h${i}-time`).innerHTML = array[i].time
    document.querySelector(`#h${i}-icon`).setAttribute('src', `http://openweathermap.org/img/wn/${array[i].icon}@2x.png`)
    document.querySelector(`#h${i}-temp`).innerHTML = ': ' + array[i].temp + '°C'
    document.querySelector(`#h${i}-description`).innerHTML = capitalize(array[i].description)
    document.querySelector(`#h${i}-feelsLike`).innerHTML = ': ' + array[i].feelsLike + '°C'

  }
}

const capitalize = (string) => {
  let arr = string.split(" ")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const result = arr.join(' ')
  return result
}

// using async because the current weather need to appear automatycally
async function fetchDataCurrentWeather(info) {
  let allDataCurrentWeather = await fetch(info);
  let allDataCurrentWeatherJson = await allDataCurrentWeather.json();

  return allDataCurrentWeatherJson;
};

let latitude = '49.246292';
let longitude = '-123.116226';
let data = await getFiveThreeData(latitude, longitude)
let key = Object.values(WEATHER_API_KEY_ALEX);
// --------------------------------------------------------------
// Search Bar & Autocomplete
let input = document.getElementById("input");
let newCity = new google.maps.places.Autocomplete(input);

if (newCity) {
  newCity.addListener('place_changed', getNewPlace);

  async function getNewPlace() {
    let newCityData = newCity.getPlace();
    if (!newCityData.geometry) {
      console.log("Enter a Real City");
    } else {
      latitude = newCityData.geometry.location.lat();
      longitude = newCityData.geometry.location.lng();
      let rawNewCityData = await fetchDataCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}&units=metric`);

      data = await getFiveThreeData(latitude, longitude)

      console.log(data)
      console.log(rawNewCityData);



      const dataObject = data
      console.log(dataObject)

      let day0Card = document.querySelector('#day-0')
      let day1Card = document.querySelector('#day-1')
      let day2Card = document.querySelector('#day-2')
      let day3Card = document.querySelector('#day-3')
      let day4Card = document.querySelector('#day-4')

      let hourCardContainer = document.querySelector('#hour-card-container')

      assignDayValues(0, dataObject.Day0)
      assignDayValues(1, dataObject.Day1)
      assignDayValues(2, dataObject.Day2)
      assignDayValues(3, dataObject.Day3)
      assignDayValues(4, dataObject.Day4)

      let hourValDay0 = Object.values(dataObject.Day0).slice(4)
      console.log(hourValDay0)
      let hourValDay1 = Object.values(dataObject.Day1).slice(4)
      let hourValDay2 = Object.values(dataObject.Day2).slice(4)
      let hourValDay3 = Object.values(dataObject.Day3).slice(4)
      let hourValDay4 = Object.values(dataObject.Day4).slice(4)


      day0Card.addEventListener('click', (e) => {
        e.preventDefault();
        hourCardContainer.innerHTML = ''
        for (let i = 0; i < hourValDay0.length; i++) {
          new createHourCards(hourCardContainer, i)
        }
        assignHourValues(hourValDay0)
      })

      day1Card.addEventListener('click', (e) => {
        e.preventDefault();
        hourCardContainer.innerHTML = ''
        for (let i = 0; i < hourValDay1.length; i++) {
          new createHourCards(hourCardContainer, i)
        }
        assignHourValues(hourValDay1)
      })

      day2Card.addEventListener('click', (e) => {
        e.preventDefault();
        hourCardContainer.innerHTML = ''
        for (let i = 0; i < hourValDay2.length; i++) {
          new createHourCards(hourCardContainer, i)
        }
        assignHourValues(hourValDay2)
      })

      day3Card.addEventListener('click', (e) => {
        e.preventDefault();
        hourCardContainer.innerHTML = ''
        for (let i = 0; i < hourValDay3.length; i++) {
          new createHourCards(hourCardContainer, i)
        }
        assignHourValues(hourValDay3)
      })

      day4Card.addEventListener('click', (e) => {
        e.preventDefault();
        hourCardContainer.innerHTML = ''
        for (let i = 0; i < hourValDay4.length; i++) {
          new createHourCards(hourCardContainer, i)
        }
        assignHourValues(hourValDay4)
      })


      let newWeather = rawNewCityData && rawNewCityData.weather ? rawNewCityData.weather[0].main : null;
      let newTemp = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.temp : null;
      let newTempFeelsLike = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.feels_like : null;
      let newHumidity = rawNewCityData && rawNewCityData.main ? rawNewCityData.main.humidity : null;
      let newWindDirection = rawNewCityData && rawNewCityData.wind ? rawNewCityData.wind.deg : null;
      let newWindSpeed = rawNewCityData && rawNewCityData.wind ? rawNewCityData.wind.speed : null;
      let newNameCity = rawNewCityData.name;
      let newVisibility = rawNewCityData.visibility;

      newtWeatherData = [];
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
} else {
  latitude = '49.246292';
  longitude = '-123.116226';
}

const rawCurrentWeatherData = await fetchDataCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}&units=metric`);


export default { data }


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

let favBtn  = document.querySelector('#fav-btn')
let favCitiesList = document.querySelector('#favorite-cities-list')

favBtn.addEventListener('click', ()=>{
  localStorage.setItem('CurrentCity' , JSON.stringify({name:newtWeatherData[0], lat: 19.432608, long:-99.133209}))
  let itemLink = document.createElement('a')
  itemLink.classList.add('dropdown-item')
  itemLink.setAttribute('href', '#')
  itemLink.setAttribute('id', `${JSON.parse(localStorage.getItem(localStorage.key(0))).name}`)
  itemLink.innerHTML = `${JSON.parse(localStorage.getItem(localStorage.key(0))).name}`

  let item = document.createElement('li')
  item.appendChild(itemLink)
  
  favCitiesList.appendChild(item)
})

