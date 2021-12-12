import MachineChargeForm from './machineChargeForm/index.js';
import createTemplate from '../utils/createTemplate.js';
import { HEADING_CHARGE_MACHINE, ID_AMOUNT, LABEL_AMOUNT } from './const.js';
import createDivision from '../utils/createDivision.js';
import calculateSumOfCoins from '../../machine/utils/calculateSumOfCoins.js';
import MachineChargedCoinsTable from './machineChargedCoinsTable/index.js';

const createMachineCargeFormContainer = (chargedCoins) => {
  const container = createTemplate(
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

const createMachineChargedCoinsTableContainer = (chargedCoins) => {
  const container = createTemplate(
    'machine-charged-coins-table-container',
    HEADING_CHARGE_MACHINE
  );
  container.appendChild(new MachineChargedCoinsTable(chargedCoins).getTable());

  return container;
};
export {
  createMachineCargeFormContainer,
  createMachineChargedCoinsTableContainer,
};
