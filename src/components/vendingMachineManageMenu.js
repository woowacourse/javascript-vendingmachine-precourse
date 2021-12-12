import { ID } from '../constants/selector.js';
import { COIN_TABLE } from '../constants/table.js';
import {
  Container,
  SubTitle,
  Form,
  Input,
  Button,
  Span,
  Table,
  TableHead,
} from './elements.js';

const onClickAddCoinButton = (e) => {
  e.preventDefault();
};

const createAddCoinForm = () => {
  const addCoinForm = Form();
  const addCoinInput = Input(
    ID.VENDING_MACHINE_CHARGE_INPUT,
    'number',
    '자판기가 보유할 금액'
  );
  const addCoinButton = Button(
    '충전하기',
    ID.VENDING_MACHINE_CHARGE_BUTTON,
    onClickAddCoinButton
  );

  addCoinForm.append(addCoinInput, addCoinButton);

  return addCoinForm;
};

const createCoinTable = () => {
  const coinTable = Table();
  const tableHeaders = TableHead(COIN_TABLE.HEADS);

  coinTable.innerHTML += tableHeaders;

  return coinTable;
};

const VendingMachineManageMenu = () => {
  const container = Container('vending-machine-manage');
  const addCoinSubTitle = SubTitle('자판기 동전 충전하기');
  const addCoinForm = createAddCoinForm();
  const coinSpan = Span('보유 금액: ');
  const haveCoinSubTitle = SubTitle('자판기가 보유한 동전');
  const coinTable = createCoinTable();

  container.append(
    addCoinSubTitle,
    addCoinForm,
    coinSpan,
    haveCoinSubTitle,
    coinTable
  );

  return container;
};

export default VendingMachineManageMenu;
