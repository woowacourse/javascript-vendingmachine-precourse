import { ID, CLASS, DATASET } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
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
} from '../elements.js';

export const createAddMoneyForm = (event) => {
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

export const createProductPurchaseRow = (
  datas,
  trClassName,
  tdClassNames,
  event
) => {
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

export const createProductPurchaseTable = () => {
  const productPurchaseTable = Table(ID.PRODUCT_PURCHASE_TABLE);
  TableHead(productPurchaseTable, MACHINE.TABLE.PRODUCT_PURCHASE_HEADS);

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

  TableHead(coinTable, MACHINE.TABLE.COIN_HEADS);
  MACHINE.COIN.forEach((coin, index) => {
    const tableRow = createCoinRow(
      `${coin}${MACHINE.WON}`,
      ID.RETURN_COIN[index]
    );

    coinTable.append(tableRow);
  });

  return coinTable;
};
