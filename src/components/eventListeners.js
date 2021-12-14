import {ADD_TAB_ID, MANAGE_TAB_ID, PURCHASE_TAB_ID} from '../constants.js';

export default (vendingMachine) => {
  const addTabButton = document.getElementById(ADD_TAB_ID.ADD_BUTTON);
  addTabButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById(ADD_TAB_ID.NAME_INPUT).value;
    const price = document.getElementById(ADD_TAB_ID.PRICE_INPUT).value;
    const quantity = document.getElementById(ADD_TAB_ID.QUANTITY_INPUT).value;

    vendingMachine.addProduct(name, price, quantity);
  });

  const manageTabButton = document.getElementById(MANAGE_TAB_ID.CHARGE_BUTTON);
  manageTabButton.addEventListener('click', (e) => {
    e.preventDefault();
    const money = document.getElementById(MANAGE_TAB_ID.CHARGE_INPUT).value;

    vendingMachine.addCoin(money);
  });

  const purchaseTabButton = document.getElementById(
      PURCHASE_TAB_ID.CHARGE_BUTTON,
  );
  purchaseTabButton.addEventListener('click', (e) => {
    e.preventDefault();
    const money = document.getElementById(PURCHASE_TAB_ID.CHARGE_INPUT).value;

    vendingMachine.userBuy(money);
  });

  const returnButton = document.getElementById(PURCHASE_TAB_ID.RETURN_BUTTON);
  returnButton.addEventListener('click', (e) => {
    e.preventDefault();
    vendingMachine.returnMoney();
  });
};
