import { DOM, EVENT, ERROR_MESSAGE, NUMBER } from '../utils/constant.js';
import SetCoinReturn from './SetCoinReturn.js';
import SetPurchaseButtons from './SetPurchaseButtons.js';

export default class CheckCoinReturn {
  constructor(render, coins, product, vendingMachine) {
    this.render = render;
    this.coins = coins;
    this.product = product;
    this.vendingMachine = vendingMachine;
  }

  onClickPurchaseButton = ($purchaseButton) => {
    $purchaseButton.addEventListener(EVENT.CLICK, (event) => {
      const $targetQuantity = event.target.parentElement.previousElementSibling;
      const $targetPrice = $targetQuantity.previousElementSibling;
      const $targetName = $targetPrice.previousElementSibling;
      const setPurchaseButtons = new SetPurchaseButtons(this.render, this.vendingMachine, this.product);
      setPurchaseButtons.reRenderProductAddMenu($targetName, $targetPrice, $targetQuantity);
    });
  };

  getPurchaseButtons = () => {
    const $$purchaseButtons = document.querySelectorAll(DOM.$$PURCHASE_BUTTONS);
    $$purchaseButtons.forEach(($purchaseButton) => this.onClickPurchaseButton($purchaseButton));
  };

  onClickCoinReturnButton = () => {
    const $coinReturnButton = document.querySelector(DOM.$COIN_RETURN_BUTTON);
    $coinReturnButton.addEventListener(EVENT.CLICK, () => {
      const previousCoinsHash = { ...this.coins.getCoinsHash() };
      const previousCoinAmount = this.coins.getCoinAmount();

      if (previousCoinAmount === NUMBER.ZERO) {
        this.render.alertMessage(ERROR_MESSAGE.CHARGE_COIN_FIRST);

        return;
      }

      const setCoinReturn = new SetCoinReturn(this.render, this.coins, this.vendingMachine);
      setCoinReturn.main(previousCoinsHash, previousCoinAmount);
    });
  };

  main = () => {
    this.getPurchaseButtons();
    this.onClickCoinReturnButton();
  };
}
