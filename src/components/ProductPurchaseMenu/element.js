import { ID, CLASS, DATASET } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import {
  SubTitle,
  Form,
  Input,
  Span,
  SpanWithId,
  ButtonWithId,
  ButtonWithClassName,
  Table,
  TableHead,
  TableRowWithClassName,
  TableDataWithClassName,
} from '../Element/domElement.js';
import { createCoinTable } from '../Element/coinTable.js';

const createMoneyAddForm = (event) => {
  const addMoneyForm = Form();
  const addMoneyInput = Input(
    ID.CHARGE_INPUT,
    'number',
    MACHINE.INPUT.USER_MONEY
  );
  const addMoneyButton = ButtonWithId(
    MACHINE.BUTTON.ADD_USER_MONEY,
    ID.CHARGE_BUTTON,
    event
  );

  addMoneyForm.append(addMoneyInput, addMoneyButton);

  return addMoneyForm;
};

const createProductTable = () => {
  const productPurchaseTable = Table(ID.PRODUCT_PURCHASE_TABLE);

  TableHead(productPurchaseTable, MACHINE.TABLE.PRODUCT_PURCHASE_HEADS);

  return productPurchaseTable;
};

export const moneyAddForm = (event) => {
  const moneyAddSubTitle = SubTitle(MACHINE.SUBTITLE.INSERT_MONEY);
  const moneyAddForm = createMoneyAddForm(event);

  return [moneyAddSubTitle, moneyAddForm];
};

export const userMoneySpan = () => {
  const insertSpan = Span(MACHINE.TEXT.USER_MONEY);
  const moneySpan = SpanWithId('', ID.CHARGE_AMOUNT);

  return [insertSpan, moneySpan];
};

export const productTable = () => {
  const productSubTitle = SubTitle(MACHINE.SUBTITLE.PRODUCT_PURCHASE_STATUS);
  const productTable = createProductTable();

  return [productSubTitle, productTable];
};

export const coinTable = (event) => {
  const changeSubTitle = SubTitle(MACHINE.SUBTITLE.CHANGE);
  const returnButton = ButtonWithId(
    MACHINE.BUTTON.RETURN,
    ID.COIN_RETURN_BUTTON,
    event
  );
  const coinTable = createCoinTable(ID.RETURN_COIN_TABLE, ID.RETURN_COIN);

  return [changeSubTitle, returnButton, coinTable];
};

export const createProductRow = (datas, trClassName, tdClassNames, event) => {
  const tr = TableRowWithClassName(trClassName);
  const purchaseButton = ButtonWithClassName(
    MACHINE.BUTTON.PURCHASE,
    CLASS.PRODUCT_PURCHASE_BUTTON,
    event
  );

  datas.forEach((data, index) => {
    const td = TableDataWithClassName(data, tdClassNames[index]);
    td.dataset[DATASET[index]] = data;
    tr.append(td);
  });
  tr.append(purchaseButton);

  return tr;
};
