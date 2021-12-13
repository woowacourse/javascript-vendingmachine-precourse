import { ID } from '../constants/selector.js';
import { COIN_TABLE } from '../constants/table.js';
import {
  Form,
  Input,
  ButtonWithId,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableDataWithId,
} from './elements.js';

const createCoinRow = (coin, id) => {
  const tableRow = TableRow();
  const coinNameData = TableData(coin);
  const coinQuantityData = TableDataWithId('', id);

  tableRow.append(coinNameData, coinQuantityData);

  return tableRow;
};

export const createAddCoinForm = (event) => {
  const addCoinForm = Form();
  const addCoinInput = Input(
    ID.VENDING_MACHINE_CHARGE_INPUT,
    'number',
    '자판기가 보유할 금액'
  );
  const addCoinButton = ButtonWithId(
    '충전하기',
    ID.VENDING_MACHINE_CHARGE_BUTTON,
    event
  );

  addCoinForm.append(addCoinInput, addCoinButton);

  return addCoinForm;
};

export const createCoinTable = () => {
  const coinTable = Table();
  const coin500Row = createCoinRow('500원', ID.VENDING_MACHINE_COIN_500);
  const coin100Row = createCoinRow('100원', ID.VENDING_MACHINE_COIN_100);
  const coin50Row = createCoinRow('50원', ID.VENDING_MACHINE_COIN_50);
  const coin10Row = createCoinRow('10원', ID.VENDING_MACHINE_COIN_10);

  TableHead(coinTable, COIN_TABLE.HEADS);
  coinTable.append(coin500Row, coin100Row, coin50Row, coin10Row);

  return coinTable;
};
