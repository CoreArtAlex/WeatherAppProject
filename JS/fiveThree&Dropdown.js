// import fetch from 'node-fetch';
import WeatherAPIKey from './APIKey.js'

const fetchData = async (info) => {
  let allData = await fetch(info)
  let allDataJson = await allData.json();

  return allDataJson
}

const setAPIURL = () => {

  let lat = '49.2608724'
  let long = '-123.113952'
  let keyData = Object.values(WeatherAPIKey)
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${keyData}&units=metric`

  return url
}

function dayForecast(day, time, temp, feelsLike, description) {
  this.day = day
  this.time = time
  this.temp = temp
  this.feelsLike = feelsLike
  this.description = description
}

window.addEventListener('DOMContentLoaded', async (event) => {

  let fiveThreeData = {
    Day0: {},
    Day1: {},
    Day2: {},
    Day3: {},
    Day4: {}
  }

  let url = setAPIURL();
  let rawFiveThreeData = await fetchData(url)

  console.log(rawFiveThreeData.list)

  const currentTimestamp = new Date(rawFiveThreeData.list[0].dt * 1000)
  const currentDay = currentTimestamp.getDate()

  rawFiveThreeData.list.forEach((element) => {

    // let dayForecast = {
    //   day: null,
    //   time: null,
    //   temp: null,
    //   feelsLike: null,
    //   description: null
    // }

    let date = new Date(element.dt * 1000)

    switch (date.getDate()) {
      case currentDay:
        let day0Forecast = new dayForecast(date.getDate(), `${date.getHours()}:${date.getMinutes()}`, element.main.temp, element.main.feels_like, element.weather[0].description)
        // dayForecast.day = date.getDate();
        // dayForecast.time = `${date.getHours()}:${date.getMinutes()}`
        // dayForecast.temp = element.main.temp;
        // dayForecast.feelsLike = element.main.feels_like;
        // dayForecast.description = element.weather[0].description
        // fiveThreeData.Day0[`Time ${dayForecast.time}`] = dayForecast
        fiveThreeData.Day0[`Time ${date.getHours()}:${date.getMinutes()}`] = day0Forecast
        break;

      case currentDay + 1:
        let day1Forecast = new dayForecast(date.getDate(), `${date.getHours()}:${date.getMinutes()}`, element.main.temp, element.main.feels_like, element.weather[0].description)
        fiveThreeData.Day1[`Time ${date.getHours()}:${date.getMinutes()}`] = day1Forecast

        break;

      case currentDay + 2:
        let day2Forecast = new dayForecast(date.getDate(), `${date.getHours()}:${date.getMinutes()}`, element.main.temp, element.main.feels_like, element.weather[0].description)
        fiveThreeData.Day2[`Time ${date.getHours()}:${date.getMinutes()}`] = day2Forecast
        break;

      case currentDay + 3:
        let day3Forecast = new dayForecast(date.getDate(), `${date.getHours()}:${date.getMinutes()}`, element.main.temp, element.main.feels_like, element.weather[0].description)
        fiveThreeData.Day3[`Time ${date.getHours()}:${date.getMinutes()}`] = day3Forecast
        break;

      case currentDay + 4:
        let day4Forecast = new dayForecast(date.getDate(), `${date.getHours()}:${date.getMinutes()}`, element.main.temp, element.main.feels_like, element.weather[0].description)
        fiveThreeData.Day4[`Time ${date.getHours()}:${date.getMinutes()}`] = day4Forecast
        break;
    }
  })
  console.log(Object.values(fiveThreeData.Day0)[0])
})

