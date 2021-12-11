import {
  createAmountP,
  createContainer,
  createElements,
  createGridDiv,
  customCreateElement,
} from '../CreateElementUtils.js';
import {
  CHARGE_MACHINE_FORM_CONTAINER_ITEMS,
  COIN_IN_MACHINE_ITEMS,
  ID_MACHINE_TAB,
  ID_MACHINE_CHARGE_AMOUNT,
  ID_MACHINE_COIN_STATUS,
  STRING_CHARGE_AMOUNT_LABEL,
  TITLE_COIN_IN_MACHINE,
  VAL_GRID_COLUMN_SIZE,
} from './ChargeMachine.constant.js';

export default class ChargeMachine {
  constructor() {
    this.section = this.chargeMachineTab();
  }

  chargeMachineTab() {
    const formContainer = this.constructor.createFormContainer();
    const coinStatusContainer = this.constructor.createCoinContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, coinStatusContainer],
      ID_MACHINE_TAB,
    );
  }

  static createFormContainer() {
    const formContainer = createContainer(
      document.createElement('div'),
      createElements(CHARGE_MACHINE_FORM_CONTAINER_ITEMS),
    );

    formContainer.append(
      createAmountP(STRING_CHARGE_AMOUNT_LABEL, ID_MACHINE_CHARGE_AMOUNT),
    );

    return formContainer;
  }

  static createCoinContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_GRID_COLUMN_SIZE, COIN_IN_MACHINE_ITEMS)],
      ID_MACHINE_COIN_STATUS,
    );

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_COIN_IN_MACHINE,
      }),
      grid,
    ]);
  }
}
