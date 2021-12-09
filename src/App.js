import { ID } from './constants/index.js';

class App {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h1>🥤 자판기 🥤</h1>
      <div id=${ID.MENU_BUTTON_CONTAINER}>
        <button id=${ID.PRODUCT_ADD_MENU}>상품 관리</button>
        <button id=${ID.VENDING_MACHINE_MANAGE_MENU}>잔돈 충전</button>
        <button id=${ID.PRODUCT_PURCHASE_MENU}>상품 구매</button>
      </div>
      <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$buttonContainer = document.querySelector(
      `#${ID.MENU_BUTTON_CONTAINER}`
    );
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  addEvent() {
    this.$buttonContainer.addEventListener(
      'click',
      this.clickButton.bind(this)
    );
  }

  clickButton(e) {
    const { id } = e.target;
  }
}

export default App;
