import { addReturnedCoins } from '../../library/storage/returnedCoins.js';
import createButton from '../utils/createButton.js';
import createContainer from '../utils/createContainer.js';
import createElement from '../utils/createElement.js';
import {
  HEADING_CHARGE_CONSUMER,
  HEADING_PURCHASABLE_PRODUCTS,
  HEADING_RETURNED_COINS,
  ID_AMOUNT,
  LABEL_AMOUNT_CONSUMER,
  ID_BUTTON_RETURN,
  TEXT_BUTTON_RETURN,
} from './const.js';
import ConsumerChargeForm from './consumerChargeForm/index.js';
import PurchasableProductTable from './purchasableProductTable/index.js';
import ReturnedCoinTable from './returnedCoinTable/index.js';

import {
  getChargedCoinsOfVendingMachine,
  subtractChargedCoinsOfVendingMachine,
} from '../../library/storage/vendingMachineCoins.js';
import {
  getChargedCoinOfConsumer,
  subtractChargedCoinOfConsumer,
} from '../../library/storage/consumerCoin.js';
import calculateReturnedCoins from '../../machine/utils/calculateReturnedCoins.js';
import calculateSumOfCoins from '../../machine/utils/calculateSumOfCoins.js';

const createConsumerChargeFormContainer = (chargedCoin) => {
  const container = createContainer(
    'consumer-charge-form-container',
    HEADING_CHARGE_CONSUMER
  );
  container.appendChild(new ConsumerChargeForm().getForm());
  container.appendChild(document.createTextNode(`${LABEL_AMOUNT_CONSUMER}: `));
  container.appendChild(
    createElement('span', { id: ID_AMOUNT, innerText: `${chargedCoin}원` })
  );
  return container;
};

const createPurchasableProductTableContainer = (products) => {
  const container = createContainer(
    'purchasable-product-table-container',
    HEADING_PURCHASABLE_PRODUCTS
  );
  container.appendChild(new PurchasableProductTable(products).getTable());
  return container;
};

const createReturnedCoinTableContainer = (returnedCoins) => {
  const container = createContainer(
    'returned-coin-table-container',
    HEADING_RETURNED_COINS
  );
  const button = createButton(ID_BUTTON_RETURN, TEXT_BUTTON_RETURN);
  button.addEventListener('click', () => {
    window.location.reload();
    const machineChargedCoin = getChargedCoinsOfVendingMachine();
    const consumerCoin = getChargedCoinOfConsumer();
    const newReturnedCoins = calculateReturnedCoins(
      machineChargedCoin,
      consumerCoin
    );
    const newReturnedCoinAmount = calculateSumOfCoins(newReturnedCoins);
    addReturnedCoins(newReturnedCoins);
    subtractChargedCoinsOfVendingMachine(newReturnedCoins);
    subtractChargedCoinOfConsumer(newReturnedCoinAmount);
  });
  container.appendChild(button);
  container.appendChild(new ReturnedCoinTable(returnedCoins).getTable());
  return container;
};

export {
  createConsumerChargeFormContainer,
  createPurchasableProductTableContainer,
  createReturnedCoinTableContainer,
};
