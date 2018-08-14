import ApodController from "./components/apodController.js";


class App {
  constructor() {
    this.controllers = {
      apod: new ApodController
    }
  }
}

const app = new App()
//@ts-ignore
window.app = app