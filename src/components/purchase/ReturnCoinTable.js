import { $ } from '../../utils/selector.js';
import { COIN_LIST, ID, LOCAL_DB } from '../../constants/index.js';
import { returnCoinTableTemplate } from '../../utils/template/purchaseTemplate.js';
import { addTableStyle } from '../../utils/tableStyles.js';
import { getReturnCoinArray } from '../../utils/makeCoinArray.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';

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

    this.addTemplate();
    this.updatePurchaseStorage(this.returnCoin);
  }

  updatePurchaseStorage(returnCoin) {
    let purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    COIN_LIST.forEach((coin, i) => {
      purchase -= coin * returnCoin[i];
    });

    saveLocalStorage(LOCAL_DB.PURCHASE, purchase);
  }
}

export default ReturnCoinTable;
