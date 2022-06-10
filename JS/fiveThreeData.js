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

const convertDay = (value) => {
  switch (value) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

class dayForecast {
  constructor(time, temp, feelsLike, description, icon) {

    this.time = time;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.description = description;
    this.icon = icon
  }
}


async function getFiveThreeData() {

  let fiveThreeData = {
    Day0: { dayHigh: null, dayLow: null, day: null, date: null },
    Day1: { dayHigh: null, dayLow: null, day: null, date: null },
    Day2: { dayHigh: null, dayLow: null, day: null, date: null },
    Day3: { dayHigh: null, dayLow: null, day: null, date: null },
    Day4: { dayHigh: null, dayLow: null, day: null, date: null }
  }

  let url = setAPIURL();
  let rawFiveThreeData = await fetchData(url)

  const currentTimestamp = new Date(rawFiveThreeData.list[0].dt * 1000)
  const currentDay = currentTimestamp.getDate()

  console.log(rawFiveThreeData.list)

  rawFiveThreeData.list.forEach((element) => {

    let date = new Date(element.dt * 1000)

    switch (date.getDate()) {
      case currentDay:
        fiveThreeData.Day0.date = date.getDate()
        fiveThreeData.Day0.day = convertDay(date.getDay())

        let day0Forecast = new dayForecast(`${date.getHours()}:00`, element.main.temp, element.main.feels_like, element.weather[0].description, element.weather[0].icon)

        if (element.main.temp_max > fiveThreeData.Day0.dayHigh || fiveThreeData.Day0.dayHigh == null) {
          fiveThreeData.Day0.dayHigh = element.main.temp_max
        }
        if (element.main.temp_min < fiveThreeData.Day0.dayLow || fiveThreeData.Day0.dayLow == null) {
          fiveThreeData.Day0.dayLow = element.main.temp_min
        }

        fiveThreeData.Day0[`Time ${date.getHours()}:00`] = day0Forecast

        break;

      case currentDay + 1:
        fiveThreeData.Day1.date = date.getDate()
        fiveThreeData.Day1.day = convertDay(date.getDay())

        let day1Forecast = new dayForecast(`${date.getHours()}:00`, element.main.temp, element.main.feels_like, element.weather[0].description, element.weather[0].icon)

        if (element.main.temp_max > fiveThreeData.Day0.dayHigh || fiveThreeData.Day1.dayHigh == null) {
          fiveThreeData.Day1.dayHigh = element.main.temp_max
        }
        if (element.main.temp_min < fiveThreeData.Day1.dayLow || fiveThreeData.Day1.dayLow == null) {
          fiveThreeData.Day1.dayLow = element.main.temp_min
        }

        fiveThreeData.Day1[`Time ${date.getHours()}:00`] = day1Forecast

        break;

      case currentDay + 2:
        fiveThreeData.Day2.date = date.getDate()
        fiveThreeData.Day2.day = convertDay(date.getDay())

        let day2Forecast = new dayForecast(`${date.getHours()}:00`, element.main.temp, element.main.feels_like, element.weather[0].description, element.weather[0].icon)

        if (element.main.temp_max > fiveThreeData.Day0.dayHigh || fiveThreeData.Day2.dayHigh == null) {
          fiveThreeData.Day2.dayHigh = element.main.temp_max
        }
        if (element.main.temp_min < fiveThreeData.Day2.dayLow || fiveThreeData.Day2.dayLow == null) {
          fiveThreeData.Day2.dayLow = element.main.temp_min
        }

        fiveThreeData.Day2[`Time ${date.getHours()}:00`] = day2Forecast

        break;

      case currentDay + 3:
        fiveThreeData.Day3.date = date.getDate()
        fiveThreeData.Day3.day = convertDay(date.getDay())

        let day3Forecast = new dayForecast(`${date.getHours()}:00`, element.main.temp, element.main.feels_like, element.weather[0].description, element.weather[0].icon)

        if (element.main.temp_max > fiveThreeData.Day0.dayHigh || fiveThreeData.Day3.dayHigh == null) {
          fiveThreeData.Day3.dayHigh = element.main.temp_max
        }
        if (element.main.temp_min < fiveThreeData.Day3.dayLow || fiveThreeData.Day3.dayLow == null) {
          fiveThreeData.Day3.dayLow = element.main.temp_min
        }

        fiveThreeData.Day3[`Time ${date.getHours()}:00`] = day3Forecast

        break;

      case currentDay + 4:
        fiveThreeData.Day4.date = date.getDate()
        fiveThreeData.Day4.day = convertDay(date.getDay())

        let day4Forecast = new dayForecast(`${date.getHours()}:00`, element.main.temp, element.main.feels_like, element.weather[0].description, element.weather[0].icon)

        if (element.main.temp_max > fiveThreeData.Day0.dayHigh || fiveThreeData.Day4.dayHigh == null) {
          fiveThreeData.Day4.dayHigh = element.main.temp_max
        }
        if (element.main.temp_min < fiveThreeData.Day4.dayLow || fiveThreeData.Day4.dayLow == null) {
          fiveThreeData.Day4.dayLow = element.main.temp_min
        }

        fiveThreeData.Day4[`Time ${date.getHours()}:00`] = day4Forecast

        break;
    }

  })

  return fiveThreeData
}


const data = await getFiveThreeData()
export default { data }



