const input = document.querySelector('input')

function location() {
  /* if the input matches the name of a city - display the info of that city
  info needed will include:
  wind
  temperature
  sky conditions
  humidity
  */
  
  fetch('https://api.weatherapi.com/v1/current.json?key=7aa10a33b43847a081114832232012&q=london', {mode: 'cors'})
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (err) {
      throw err
    })
}

const submit = document.querySelector('#submit')


