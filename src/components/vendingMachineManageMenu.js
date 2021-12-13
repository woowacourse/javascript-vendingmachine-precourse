import { ID } from '../constants/selector.js';
import { COIN } from '../constants/coin.js';
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
    const tableRow = createCoinRow(`${coin}원`, ID.VENDING_MACHINE_COIN[index]);

    coinTable.append(tableRow);
  });

  return coinTable;
};
