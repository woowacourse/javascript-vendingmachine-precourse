import { MANAGE_TEMPLATE } from '../constant.js';

export default class ManageTabView {
  constructor() {
    this.container = document.getElementById('tabContent');
  }

  render() {
    this.container.innerHTML = MANAGE_TEMPLATE;
  }
}
