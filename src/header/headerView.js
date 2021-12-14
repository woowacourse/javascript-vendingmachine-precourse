import { HEADER_TITLE, BUTTONS_INFO } from './headerViewInfo.js';
import { $ } from '../utils/common.js';
import { APP_ID, MAIN_ID } from '../utils/constants.js';

export default class HeaderView {
  constructor() {
    this.render();
  }

  render() {
    $(APP_ID).innerHTML = this.template();
  }

  template() {
    return `
       <h2>🥤${HEADER_TITLE}🥤</h2>
       ${this.makeButtons()}
       <div id="main"></div>
    `;
  }

  makeButtons() {
    let buttonHTML = '';
    Object.values(BUTTONS_INFO).forEach((item) => {
      buttonHTML += ` <button id=${item.ID}>${item.TEXT}</button>`;
    });
    return buttonHTML;
  }
}
