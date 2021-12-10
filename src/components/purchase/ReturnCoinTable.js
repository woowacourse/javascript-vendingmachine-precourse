import { $ } from '../../utils/selector.js';
import { ID, LOCAL_DB } from '../../constants/index.js';
import { returnCoinTableTemplate } from '../../utils/template/purchaseTemplate.js';
import { addTableStyle } from '../../utils/tableStyles.js';
import { getReturnCoinArray } from '../../utils/makeCoinArray.js';
import { getLocalStorage } from '../../utils/localStorage.js';

class ReturnCoinTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.returnCoin = [];

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = returnCoinTableTemplate(this.returnCoin);
    addTableStyle();
  }

  selectDom() {
    this.$returnButton = $(`#${ID.COIN_RETURN_BUTTON}`);
  }

  addEvent() {
    this.$returnButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    let amount = getLocalStorage(LOCAL_DB.PURCHASE);
    this.returnCoin = getReturnCoinArray(amount);
    console.log(this.returnCoin);
  }
}

export default ReturnCoinTable;
