// import fetch from 'node-fetch';
async function fetchData(info){
  
  let allData = await fetch(info)
  let allDataJson = await allData.json();
  
  return allDataJson

}

async function setAPIURL(){
  let keyResponse = await fetch('APIKey.txt')
  let keyData = await keyResponse.text()
  
  let lat = '49.2608724'
  let long = '-123.113952'
  let url = await `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${keyData}&units=metric`

  return url
}

window.addEventListener('DOMContentLoaded', async (event) =>{
  let url = await setAPIURL();
  let rawFiveThreeData = await fetchData(url)
  
  console.log(rawFiveThreeData.list)
})

// document.getElementById('button2').setAttribute('href', `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`)
// let fiveThreeData = {}

// console.log(rawFiveThreeData.list)