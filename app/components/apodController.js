import ApodService from './apodService.js'
import Pic from '../models/pic.js';

const apodService = new ApodService

function draw(data) {
  document.getElementById('app').innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.apod.getPic()">
  Get Pictures
  </button>
  <div id="pictures"></div>
   `
}

function drawPic(data) {
  let template = ''
  data(pic => {

    template += `<div>
    copyright ${pic.copyright}
    hdurl: ${pic.name}
    </div>
    `
  });


  document.getElementById('pictures').innerHTML = template
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
    apodService.getPic(drawPic, drawError)
  }
}