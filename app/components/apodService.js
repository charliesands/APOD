import Pic from '../models/pic.js'

export default class apodService {

  getPic(draw, drawError) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=bAheelu3sDg8QxbS3ir7y3ptgV5IpUvybFo0UDlS&date=2018-08-10')
      .then(res => res.json())
      .then(draw)
      .catch(drawError)

  }

}