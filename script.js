// const input = document.querySelector('input')

let sky = document.querySelector('#sky')
let temp = document.querySelector('#temp')
let city = document.querySelector('#city')
let percent = document.querySelector('#percent')
let speed = document.querySelector('#speed')
const input = document.querySelector('input')
const submit = document.querySelector('#submit')

function locationFunction () {
  (console.log('hi'))
  return fetch(`https://api.weatherapi.com/v1/current.json?key=7aa10a33b43847a081114832232012&q=${input.value}`, { mode: 'cors' })
    .then(function (response) {
      return (response.json())
    })
    /*.then(function (response) {
      console.log(response)
    })*/
    .then(function (response) {
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
    .catch(function (err) {
      console.log(err)
      console.log('error')
    })
}

// const submit = document.querySelector('#submit')

submit.addEventListener('click', locationFunction)
