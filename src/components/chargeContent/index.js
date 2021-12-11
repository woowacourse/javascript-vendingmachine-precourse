import MachineChargeForm from './machineChargeForm/index.js';
import createTemplate from '../utils/createTemplate.js';
import { HEADING_CHARGE_MACHINE, ID_AMOUNT, LABEL_AMOUNT } from './const.js';
import createDivision from '../utils/createDivision.js';

const createMachineCargeFormContainer = (chargedCoin) => {
  const container = createTemplate(
    'machine-charge-form-container',
    HEADING_CHARGE_MACHINE
  );
  container.appendChild(new MachineChargeForm().getForm());
  container.appendChild(
    createDivision({
      id: ID_AMOUNT,
      innerText: `${LABEL_AMOUNT}: ${chargedCoin}원`,
    })
  );

  return container;
};

export { createMachineCargeFormContainer };
