import Event from './Event.js';

class State {
  constructor() {
    this.event = new Event();
  }

  updateState() {
    this.event.fire();
  }
}

export default State;
