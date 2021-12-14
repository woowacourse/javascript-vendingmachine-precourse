import AdminModel from '../model/adminModel.js';
import PurchaseModel from '../model/purchaseModel.js';
import PurchaseView from '../view/purchaseView.js';
import {
  PURCHASE_ELEMENT_CLASS,
  PURCHASE_ELEMENT_ID,
  PURCHASE_ERR,
} from '../constants/constants.js';
import ChargeModel from '../model/chargeModel.js';

export default class PurchaseController {
  static init() {
    PurchaseView.render();
    PurchaseView.addPurchaseProductList(new AdminModel());
    const purchaseObject = new PurchaseModel();
    PurchaseView.updateChargeInput(purchaseObject);
    this.bindEventListener(purchaseObject);
  }

  static bindEventListener(purchaseObject) {
    this.bindChargeButton(purchaseObject);
    this.bindPurchaseButton(purchaseObject);
    this.bindChangeButton(purchaseObject);
  }

  static bindChargeButton(purchaseObject) {
    document
      .querySelector(`#${PURCHASE_ELEMENT_ID.chargeButton}`)
      .addEventListener('click', () => {
        if (purchaseObject.isValidChargeInput()) {
          purchaseObject.addChargeMoneyStorage();
          PurchaseView.updateChargeInput(purchaseObject);
          purchaseObject.resetChargeInput();
        }
      });
  }

  static bindPurchaseButton(purchaseObject) {
    const purchaseButton = document.querySelectorAll(
      `.${PURCHASE_ELEMENT_CLASS.purchaseButton}`,
    );
    purchaseButton.forEach((buttonEl) => {
      buttonEl.addEventListener('click', (event) => {
        this.handlePurchaseButton(event.target, purchaseObject);
      });
    });
  }

  static handlePurchaseButton(element, purchaseObject) {
    const productEl = element.closest(
      `.${PURCHASE_ELEMENT_CLASS.productPurchaseItem}`,
    );
    this.setChargeMoneyStorage(purchaseObject, productEl);
  }

  static setChargeMoneyStorage(purchaseObject, productEl) {
    const chargeMoneyStorage = purchaseObject.getChargeMoneyStorage();
    const productPriceEl = productEl.querySelector('.product-purchase-price');
    const productQuantityEl = productEl.querySelector(
      '.product-purchase-quantity',
    );
    if (productQuantityEl.innerHTML === '0') {
      alert(PURCHASE_ERR.noQuantity);
    } else if (chargeMoneyStorage >= productPriceEl.innerHTML) {
      purchaseObject.setChargeMoneyStorage(
        chargeMoneyStorage - productPriceEl.innerHTML,
      );
      productQuantityEl.innerHTML -= 1;
      productQuantityEl.dataset.productQuantity = productQuantityEl.innerHTML;
      PurchaseView.updateChargeInput(purchaseObject);
      this.setProductStorage(productEl);
    } else {
      alert(PURCHASE_ERR.shortMoney);
    }
  }

  static setProductStorage(productEl) {
    const productNameEl = productEl.querySelector('.product-purchase-name');
    const productQuantityEl = productEl.querySelector(
      '.product-purchase-quantity',
    );
    const productStorage = new AdminModel().getProductStorage();
    const updateProductStorage = productStorage.map(
      ({ name, price, quantity }) => {
        if (name === productNameEl.innerHTML) {
          return { name, price, quantity: productQuantityEl.innerHTML };
        }

        return { name, price, quantity };
      },
    );
    localStorage.setItem('productList', JSON.stringify(updateProductStorage));
  }

  static bindChangeButton(purchaseObject) {
    document
      .querySelector(`#${PURCHASE_ELEMENT_ID.coinReturnButton}`)
      .addEventListener('click', () => {
        this.returnCoins(purchaseObject);
      });
  }

  static returnCoins(purchaseObject) {
    let chargeMoney = purchaseObject.getChargeMoneyStorage();
    const coinNumList = Object.values(new ChargeModel().getCoinStorage());
    const coinValue = [500, 100, 50, 10];
    const returnCoins = [];
    for (let i = 0; i < coinNumList.length; i += 1) {
      const coinCount = this.getCoin(chargeMoney, coinValue[i], coinNumList[i]);
      chargeMoney -= coinCount * coinValue[i];
      returnCoins.push(coinCount);
    }
    purchaseObject.setChargeMoneyStorage(chargeMoney);
    PurchaseView.updateChargeInput(purchaseObject);
    PurchaseView.addReturnCoins(returnCoins);
    if (Math.max(...returnCoins) === 0) {
      alert(PURCHASE_ERR.noCoins);
    }
    this.updateCoinStorage(returnCoins);
  }

  static getCoin(chargeMoney, coinValue, coinNum) {
    return Math.min(Math.floor(chargeMoney / coinValue), coinNum);
  }

  static updateCoinStorage(returnCoins) {
    const coinStorage = new ChargeModel().getCoinStorage();
    const coinKeyList = Object.keys(coinStorage);
    const newCoinStorage = {};
    for (let i = 0; i < coinKeyList.length; i += 1) {
      newCoinStorage[coinKeyList[i]] =
        coinStorage[coinKeyList[i]] - returnCoins[i];
    }
    localStorage.setItem('coinList', JSON.stringify(newCoinStorage));
  }
}
