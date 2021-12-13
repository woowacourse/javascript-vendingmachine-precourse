import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import {
  Form,
  Input,
  ButtonWithId,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableDataWithId,
} from '../elements.js';

export const createAddCoinForm = (event) => {
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
      ID.VENDING_MACHINE_COIN[index]
    );

    coinTable.append(tableRow);
  });

  return coinTable;
};
