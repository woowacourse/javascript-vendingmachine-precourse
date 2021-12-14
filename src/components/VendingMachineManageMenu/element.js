import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import {
  SubTitle,
  Form,
  Input,
  Span,
  SpanWithId,
  ButtonWithId,
} from '../elements.js';
import { createCoinTable } from '../coinTable.js';

const createAddCoinForm = (event) => {
  const addCoinForm = Form();
  const addCoinInput = Input(
    ID.VENDING_MACHINE_CHARGE_INPUT,
    'number',
    MACHINE.INPUT.CHARGE
  );
  const addCoinButton = ButtonWithId(
    MACHINE.BUTTON.ADD_COIN,
    ID.VENDING_MACHINE_CHARGE_BUTTON,
    event
  );

  addCoinForm.append(addCoinInput, addCoinButton);

  return addCoinForm;
};

export const coinAddForm = (event) => {
  const coinAddSubTitle = SubTitle(MACHINE.SUBTITLE.ADD_COIN);
  const coinAddForm = createAddCoinForm(event);

  return [coinAddSubTitle, coinAddForm];
};

export const chargeAmountSpan = () => {
  const haveAmountSpan = Span(MACHINE.TEXT.HAVE_AMOUNT);
  const chargeAmountSpan = SpanWithId('', ID.VENDING_MACHINE_CHARGE_AMOUNT);

  return [haveAmountSpan, chargeAmountSpan];
};

export const coinTable = () => {
  const haveCoinSubTitle = SubTitle(MACHINE.SUBTITLE.HAVE_COIN);
  const coinTable = createCoinTable(
    ID.MACHINE_COIN_TABLE,
    ID.VENDING_MACHINE_COIN
  );

  return [haveCoinSubTitle, coinTable];
};
