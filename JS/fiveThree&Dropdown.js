import fetch from 'node-fetch';


async function fetchData(info){

  let allData = await fetch(info)
  let allDataJson = await allData.json();
  
  return allDataJson

}

let lat = '49.2608724'
let long = '-123.113952'
let key = '' 

const rawFiveThreeData = await fetchData(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`)

let fiveThreeData = {}



console.log(rawFiveThreeData.list)