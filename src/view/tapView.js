import { MENU_ELEMENT } from '../constants/constants.js';

export default class TapView {
  static render() {
    this.appendComponentToApp(this.tapComponent());
  }

  static removeTap() {
    const tapEl = document.querySelector('#tap');
    if (tapEl) {
      tapEl.remove();
    }
  }

  static appendComponentToApp(component) {
    document.querySelector('#app').appendChild(component);
  }

  static addHtmlToElement(element, html) {
    element.innerHTML += html;
  }

  static setHtmlToElement(element, html) {
    element.innerHTML = html;
  }

  static tapComponent() {
    const divEl = document.createElement('div');
    divEl.id = 'tap-menu';
    this.addHtmlToElement(divEl, this.titleComponent());
    this.addHtmlToElement(divEl, this.menuComponent());
    return divEl;
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
