import { ID } from '../constants/selector.js';
import { COIN_TABLE, PRODUCT_PURCHASE_TABLE } from '../constants/table.js';
import {
  Form,
  Input,
  Button,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableDataWithId,
} from './elements.js';

export const createAddMoneyForm = (event) => {
  const addMoneyForm = Form();
  const addMoneyInput = Input(ID.CHARGE_INPUT, 'number', '투입할 금액');
  const addMoneyButton = Button('투입하기', ID.CHARGE_BUTTON, event);

  addMoneyForm.append(addMoneyInput, addMoneyButton);

  return addMoneyForm;
};

export const createProductPurchaseTable = () => {
  const productPurchaseTable = Table();
  TableHead(productPurchaseTable, PRODUCT_PURCHASE_TABLE.HEADS);

  return productPurchaseTable;
};

const createCoinRow = (coin, id) => {
  const tableRow = TableRow();
  const coinNameData = TableData(coin);
  const coinQuantityData = TableDataWithId('', id);

  tableRow.append(coinNameData, coinQuantityData);

  return tableRow;
};

export const createCoinTable = () => {
  const coinTable = Table();
  const coin500Row = createCoinRow('500원', ID.COIN_500);
  const coin100Row = createCoinRow('100원', ID.COIN_100);
  const coin50Row = createCoinRow('50원', ID.COIN_50);
  const coin10Row = createCoinRow('10원', ID.COIN_10);

  TableHead(coinTable, COIN_TABLE.HEADS);
  coinTable.append(coin500Row, coin100Row, coin50Row, coin10Row);

  return coinTable;
};
