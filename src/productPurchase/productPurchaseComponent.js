import ProductPurchaseView from './productPurchaseView.js';
import ValidateUtils from '../utils/validateUtils.js';
import LocalStorageUtils from '../utils/localStorageUtils.js';
import { $ } from '../utils/common.js';
import { BUTTON, INPUT, PURCHASE_TABLE } from './productPurchaseViewInfo.js';
import { ERROR } from '../utils/constants.js';

export default class productPurchaseComponent {
  constructor() {
    this.productPurchaseView = new ProductPurchaseView();
    this.chargeMoney = 0;
  }

  configureButtons() {
    $(`#${BUTTON.CHARGE.ID}`).addEventListener('click', this.onClickChargeButton);
    $(`#${BUTTON.CHANGES.ID}`).addEventListener('click', this.onClickChagesButton);
    document.querySelectorAll(`.${BUTTON.PURCHASE.CLASS}`).forEach((button) => {
      button.addEventListener('click', this.onClickPurchaseButton);
    });
  }

  onClickChargeButton = () => {
    const inputMoney = Number($(`#${INPUT.ID}`).value);
    if (ValidateUtils.checkInputAmount(inputMoney)) {
      this.chargeMoney += inputMoney;
      this.productPurchaseView.showAmountText(this.chargeMoney);
    }
  };

  onClickPurchaseButton = (event) => {
    const [name, price, quantity] = this.getSelectedProductData(event);

    if (this.checkAvailablePurchase(price, quantity)) {
      this.subtractQuantity(name, price);
      this.productPurchaseView.updatePurchaseTableQuantity();
      this.productPurchaseView.showAmountText(this.chargeMoney);
    }
  };

  getSelectedProductData(event) {
    const bodyItem = PURCHASE_TABLE.BODY.ITEM;

    const nameTd = event.path[2].getElementsByClassName(bodyItem.NAME.CLASS);
    const priceTd = event.path[2].getElementsByClassName(bodyItem.PRICE.CLASS);
    const quantityTd = event.path[2].getElementsByClassName(bodyItem.QUANTITY.CLASS);

    const name = nameTd[0].parentNode.dataset.productName;
    const price = Number(priceTd[0].parentNode.dataset.productPrice);
    const quantity = Number(quantityTd[0].parentNode.dataset.productQuantity);

    return [name, price, quantity];
  }

  checkAvailablePurchase(price, qunatity) {
    if (this.chargeMoney < price) {
      alert(ERROR.CANT_PURCHASE);
      return false;
    }
    if (0 >= qunatity) {
      alert(ERROR.NO_QUANTITY);
      return false;
    }
    return true;
  }

  subtractQuantity(name, price) {
    let data = LocalStorageUtils.getProductAddItem();
    data.find((item) => {
      if (item.name === name && item.price === price) {
        item.quantity -= 1;
        this.chargeMoney -= price;
        return true;
      }
    });
    LocalStorageUtils.setProductAddItem(data);
  }

  onClickChagesButton = () => {
    let data = LocalStorageUtils.getMachineManageTableItem();
    const [newData, changesCoins] = this.calculateChanges(data);

    LocalStorageUtils.setMachineManageTableItem(newData);
    this.productPurchaseView.updateChangesTableCount(changesCoins);
    this.clearInputMoney();
  };

  calculateChanges(data) {
    const coins = Object.keys(data).reverse();
    let remain = this.chargeMoney;
    let changesCoins = {};
    let changesCoin;

    coins.forEach((coin) => {
      let count = data[coin];
      [remain, count, changesCoin] = this.subtractCoin(remain, coin, count);
      data[coin] = count;
      changesCoins[coin] = changesCoin;
    });

    return [data, changesCoins];
  }

  subtractCoin(remain, coin, count) {
    let changesCoin = 0;

    while (count > 0 && remain >= coin) {
      count -= 1;
      remain -= coin;
      changesCoin += 1;
    }
    return [remain, count, changesCoin];
  }

  clearInputMoney() {
    this.chargeMoney = 0;
    this.productPurchaseView.showAmountText(0);
  }

  render() {
    this.productPurchaseView.render();
    this.configureButtons();
  }
}
