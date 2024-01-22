// const input = document.querySelector('input')

let sky = document.querySelector('#sky')
let temp = document.querySelector('#temp')
let city = document.querySelector('#city')
let percent = document.querySelector('#percent')
let speed = document.querySelector('#speed')

//function location () {
  /* if the input matches the name of a city - display the info of that city
  info needed will include:
  wind
  temperature
  sky conditions
  humidity
  */

  fetch('https://api.weatherapi.com/v1/current.json?key=7aa10a33b43847a081114832232012&q=london', {mode: 'cors'})
    .then(function (response) {
      return (response.json())
    })
    /*.then(function (response) {
      console.log(response)
    })*/
      .then (function (response) {
      let sky = document.querySelector('#sky')
      sky.src = response.current.condition.icon
      let temp = document.querySelector('#temp')
      temp.innerText = response.current.temp_c
      let city = document.querySelector('#city')
      city.innerText = response.location.name
      let percent = document.querySelector('#percent')
      percent.innerText = response.current.humidity
      let speed = document.querySelector('#speed')
      speed.innerText = response.current.wind_kph
    })
    /*.then (function (response) {
      let temp = document.querySelector('#temp')
      temp.innerText = response.current.temp_c
    })
    .then(function (response) {
      let city = document.querySelector('#city')
      city.innerText = response.location.name
    })
    .then(function (response) {
      let percent = document.querySelector('#percent')
      percent.innerText = response.current.humidity
    })
    .then(function (response) {
      let speed = document.querySelector('#speed')
      speed.innerText = response.current.wind_kph
    })
    .catch(function (err) {
      throw err
    })
//}

// const submit = document.querySelector('#submit')

//location()
*/
