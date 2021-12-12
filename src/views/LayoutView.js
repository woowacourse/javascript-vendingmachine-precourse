import View from './View.js';
import { TAB, ELEMENT_ID } from '../utils/constants.js';

const LayoutView = { ...View };

LayoutView.setup = function (element) {
  this.init(element);
  this.render();
  return this;
};

LayoutView.render = function () {
  this.element.innerHTML = `
        <h2>🥤자판기🥤</h2>
        <div id=${ELEMENT_ID.TAB_VIEW}>
        <button id=${ELEMENT_ID.PRODUCT_ADD_MENU}>${TAB.MANAGE_PRODUCT}</button>
        <button id=${ELEMENT_ID.VENDING_MACHINE_MANAGE_MENU}>${TAB.CHARGE_CHANGE}</button>
        <button id=${ELEMENT_ID.PRODUCT_PURCHASE_MENU}>${TAB.PURCHASE_PRODUCT}</button>
        </div>
        <div id=${ELEMENT_ID.RESULT_VIEW}></div>
    `;
};

export default LayoutView;
