import data from "./fiveThreeData.js"
import createHourCards from "./hourcardCreator.js"


const dataObject = Object.values(data)[0]
console.log(dataObject)

let day0Card = document.querySelector('#day-0')
let day1Card = document.querySelector('#day-1')
let day2Card = document.querySelector('#day-2')
let day3Card = document.querySelector('#day-3')
let day4Card = document.querySelector('#day-4')

let hourCardContainer = document.querySelector('#hour-card-container')

const assignDayValues = (dayNumber, dayObject) => {
      document.querySelector(`#day-${dayNumber}-hi`).innerHTML = dayObject.dayHigh
      document.querySelector(`#day-${dayNumber}-low`).innerHTML = dayObject.dayLow
      document.querySelector(`#day-${dayNumber}-day`).innerHTML = dayObject.day
      document.querySelector(`#day-${dayNumber}-date`).innerHTML = dayObject.date
      document.querySelector(`#day-${dayNumber}-description`).innerHTML = Object.values(dayObject)[4].description
      document.querySelector(`#day-${dayNumber}-icon`).setAttribute('src', `http://openweathermap.org/img/wn/${Object.values(dayObject)[4].icon}@2x.png`)
}

const assignHourValues = (array) => {
      for (let i = 0; i < array.length; i++) {
            document.querySelector(`#h${i}-time`).innerHTML = array[i].time
            document.querySelector(`#h${i}-icon`).setAttribute('src', `http://openweathermap.org/img/wn/${array[i].icon}@2x.png`)
            document.querySelector(`#h${i}-temp`).innerHTML = array[i].temp + '°C'
            document.querySelector(`#h${i}-description`).innerHTML = array[i].description
            document.querySelector(`#h${i}-feelsLike`).innerHTML = array[i].feelsLike + '°C'

      }
}

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
      for(let i=0; i<hourValDay0.length; i++){
            new createHourCards(hourCardContainer, i)
      }
      assignHourValues(hourValDay0)
})

day1Card.addEventListener('click', (e) => {
      e.preventDefault();
      hourCardContainer.innerHTML = ''
      for(let i=0; i<hourValDay1.length; i++){
            new createHourCards(hourCardContainer, i)
      }
      assignHourValues(hourValDay1)
})

day2Card.addEventListener('click', (e) => {
      e.preventDefault();
      hourCardContainer.innerHTML = ''
      for(let i=0; i<hourValDay2.length; i++){
            new createHourCards(hourCardContainer, i)
      }
      assignHourValues(hourValDay2)
})

day3Card.addEventListener('click', (e) => {
      e.preventDefault();
      hourCardContainer.innerHTML = ''
      for(let i=0; i<hourValDay3.length; i++){
            new createHourCards(hourCardContainer, i)
      }
      assignHourValues(hourValDay3)
})

day4Card.addEventListener('click', (e) => {
      e.preventDefault();
      hourCardContainer.innerHTML = ''
      for(let i=0; i<hourValDay4.length; i++){
            new createHourCards(hourCardContainer, i)
      }
      assignHourValues(hourValDay4)
})






