import { MENU_ELEMENT } from '../constants/constants.js';

export default class TapView {
  static render() {
    this.addComponent(this.tapComponent());
  }

  static addComponent(component) {
    document.querySelector('#app').innerHTML += component;
  }

  static tapComponent() {
    return `<div id=tap-menu>
	${this.titleComponent()}
	${this.menuComponent()}
	</div>`;
  }

  static titleComponent() {
    return `<h1>🥤자판기🥤</h1>`;
  }

  static menuComponent() {
    return `
    <button id=${MENU_ELEMENT.adminId}>${MENU_ELEMENT.adminName}</button>
    <button id=${MENU_ELEMENT.chargeId}>${MENU_ELEMENT.chargeName}</button>
    <button id=${MENU_ELEMENT.purchaseId}>${MENU_ELEMENT.purchaseName}</button>
    `;
  }
}
