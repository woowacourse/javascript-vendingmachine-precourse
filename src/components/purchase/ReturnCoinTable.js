import { $ } from '../../utils/selector.js';
import { COIN_LIST, ID, LOCAL_DB } from '../../constants/index.js';
import { returnCoinTableTemplate } from '../../utils/template/purchaseTemplate.js';
import { addTableStyle } from '../../utils/tableStyles.js';
import { getReturnCoinArray } from '../../utils/makeCoinArray.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { isReturnPossible } from '../../utils/valid.js';

class ReturnCoinTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.returnCoinArray = [];

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = returnCoinTableTemplate(this.returnCoinArray);
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
    this.returnCoinArray = getReturnCoinArray(amount);

    if (!isReturnPossible(this.returnCoinArray)) {
      return;
    }

    this.updateLocalStorage(this.returnCoinArray);
    this.updateView();
  }

  updateLocalStorage(returnCoin) {
    this.updateCoinStorage(returnCoin);
    this.updatePurchaseStorage(returnCoin);
  }

  updatePurchaseStorage(returnCoin) {
    let purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    COIN_LIST.forEach((coin, i) => {
      purchase -= coin * returnCoin[i];
    });

    saveLocalStorage(LOCAL_DB.PURCHASE, purchase);
  }

  updateCoinStorage(returnCoin) {
    const machineCoins = getLocalStorage(LOCAL_DB.COIN);
    machineCoins.forEach((coin, i) => {
      coin.count -= returnCoin[i];
    });

    saveLocalStorage(LOCAL_DB.COIN, machineCoins);
  }

  updateView() {
    this.render();
    this.state.updateState();
  }
}

export default ReturnCoinTable;
