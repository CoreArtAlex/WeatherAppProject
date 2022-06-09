import data from "./fiveThreeData.js"

const dataObject = Object.values(data)[0]

const assignDayValues = (dayNumber, dayObject) =>{
      document.querySelector(`#day-${dayNumber}-hi`).innerHTML = dayObject.dayHigh
      document.querySelector(`#day-${dayNumber}-low`).innerHTML = dayObject.dayLow
      document.querySelector(`#day-${dayNumber}-day`).innerHTML = dayObject.day
      document.querySelector(`#day-${dayNumber}-date`).innerHTML = dayObject.date
      document.querySelector(`#day-${dayNumber}-description`).innerHTML = Object.values(dayObject)[4].description
}

//Length of hourly intervals inside of each Day
console.log(Object.values(dataObject.Day4).length-4)

assignDayValues(0, dataObject.Day0)
assignDayValues(1, dataObject.Day1)
assignDayValues(2, dataObject.Day2)
assignDayValues(3, dataObject.Day3)
assignDayValues(4, dataObject.Day4)




