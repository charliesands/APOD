import ApodService from './apodService.js'

const apodService = new ApodService

function draw(data) {
  document.getElementById('pictures').innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.apod.getPic()">
  Get Pictures
  </button>
  <div id="pictures"></div>
   `
}

function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}

export default class apodController {
  constructor() {
    draw()
  }

  getPic() {
    apodService.getPic()
  }
}