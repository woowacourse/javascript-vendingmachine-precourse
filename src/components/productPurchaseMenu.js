import { ID, CLASS, DATASET } from '../constants/selector.js';
import { COIN } from '../constants/coin.js';
import { COIN_TABLE, PRODUCT_PURCHASE_TABLE } from '../constants/table.js';
import {
  Form,
  Input,
  ButtonWithId,
  ButtonWithClassName,
  Table,
  TableHead,
  TableRow,
  TableRowWithClassName,
  TableData,
  TableDataWithId,
  TableDataWithClassName,
} from './elements.js';

export const createAddMoneyForm = (event) => {
  const addMoneyForm = Form();
  const addMoneyInput = Input(ID.CHARGE_INPUT, 'number', '투입할 금액');
  const addMoneyButton = ButtonWithId('투입하기', ID.CHARGE_BUTTON, event);

  addMoneyForm.append(addMoneyInput, addMoneyButton);

  return addMoneyForm;
};

export const createProductPurchaseRow = (
  datas,
  trClassName,
  tdClassNames,
  event
) => {
  const tr = TableRowWithClassName(trClassName);
  const purchaseButton = ButtonWithClassName(
    '구매하기',
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

export const createProductPurchaseTable = () => {
  const productPurchaseTable = Table('product-purchase-table');
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

  TableHead(coinTable, COIN_TABLE.HEADS);
  COIN.forEach((coin, index) => {
    const tableRow = createCoinRow(`${coin}원`, ID.RETURN_COIN[index]);

    coinTable.append(tableRow);
  });

  return coinTable;
};
