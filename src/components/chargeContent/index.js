import MachineChargeForm from './vendingMachineChargeForm/index.js';
import VendingMachineCoinTable from './vendingMachineCoinTable/index.js';

import createContainer from '../utils/createContainer.js';
import createDivision from '../utils/createDivision.js';
import { HEADING_CHARGE_MACHINE, ID_AMOUNT, LABEL_AMOUNT } from './const.js';
import calculateSumOfCoins from '../../machine/utils/calculateSumOfCoins.js';

const createVendingMachineChargeFormContainer = (chargedCoins) => {
  const container = createContainer(
    'machine-charge-form-container',
    HEADING_CHARGE_MACHINE
  );
  container.appendChild(new MachineChargeForm().getForm());
  container.appendChild(
    createDivision({
      id: ID_AMOUNT,
      innerText: `${LABEL_AMOUNT}: ${calculateSumOfCoins(chargedCoins)}원`,
    })
  );

  return container;
};

const createVendingMachineCoinTableContainer = (chargedCoins) => {
  const container = createContainer(
    'machine-charged-coin-table-container',
    HEADING_CHARGE_MACHINE
  );
  container.appendChild(new VendingMachineCoinTable(chargedCoins).getTable());

  return container;
};
export {
  createVendingMachineChargeFormContainer,
  createVendingMachineCoinTableContainer,
};
