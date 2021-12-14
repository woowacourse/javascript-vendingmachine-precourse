import { CHANGE_TEMPLATE } from '../constant.js';

export default class ChangeChargeTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render() {
    this.container.innerHTML = CHANGE_TEMPLATE;
  }
}
