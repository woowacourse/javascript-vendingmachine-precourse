import createContainer from '../utils/createContainer.js';
import createElement from '../utils/createElement.js';
import {
  HEADING_CHARGE_CONSUMER,
  HEADING_PURCHASABLE_PRODUCTS,
  ID_AMOUNT,
  LABEL_AMOUNT_CONSUMER,
} from './const.js';
import ConsumerChargeForm from './consumerChargeForm/index.js';
import PurchasableProductTable from './purchasableProductTable/index.js';

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
export {
  createConsumerChargeFormContainer,
  createPurchasableProductTableContainer,
};
