import View from './view/index.js'
import Controller from './controller/index.js'

export default class Vending {
  constructor(){
    this.view = new View();
    this.controller = new Controller(this.view);
  }
}

new Vending();