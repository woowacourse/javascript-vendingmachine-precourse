import { MENU_COMPONENT } from '../constants/constants.js';

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
    <button id=${MENU_COMPONENT.adminId}>${MENU_COMPONENT.adminName}</button>
    <button id=${MENU_COMPONENT.chargeId}>${MENU_COMPONENT.chargeName}</button>
    <button id=${MENU_COMPONENT.purchaseId}>${MENU_COMPONENT.purchaseName}</button>
    `;
  }
}
