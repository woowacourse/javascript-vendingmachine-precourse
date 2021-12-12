import createContainer from '../utils/createContainer.js';
import { HEADING_CHARGE_CONSUMER, LABEL_AMOUNT_CONSUMER } from './const.js';
import ConsumerChargeForm from './consumerChargeForm/index.js';

const createConsumerChargeFormContainer = (chargedCoin) => {
  const container = createContainer(
    'charge-form-container',
    HEADING_CHARGE_CONSUMER
  );
  container.appendChild(new ConsumerChargeForm().getForm());
  container.appendChild(document.createTextNode(`${LABEL_AMOUNT_CONSUMER}: `));
  container.appendChild(document.createTextNode(`${chargedCoin}원`));
  return container;
};

export { createConsumerChargeFormContainer };
