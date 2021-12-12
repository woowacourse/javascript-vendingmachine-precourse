import { ID } from '../constants/selector.js';
import { COIN_TABLE, PRODUCT_PURCHASE_TABLE } from '../constants/table.js';
import {
  Container,
  SubTitle,
  Form,
  Input,
  Button,
  Span,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableDataWithId,
} from './elements.js';

const onClickAddMoneyButton = (e) => {
  e.preventDefault();
};

const onClickReturnCoinButton = (e) => {
  e.preventDefault();
};

const createAddMoneyForm = () => {
  const addMoneyForm = Form();
  const addMoneyInput = Input(ID.CHARGE_INPUT, 'number', '투입할 금액');
  const addMoneyButton = Button(
    '투입하기',
    ID.CHARGE_BUTTON,
    onClickAddMoneyButton
  );

  addMoneyForm.append(addMoneyInput, addMoneyButton);

  return addMoneyForm;
};

const createProductPurchaseTable = () => {
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

const createCoinTable = () => {
  const coinTable = Table();
  const coin500Row = createCoinRow('500원', ID.COIN_500);
  const coin100Row = createCoinRow('100원', ID.COIN_100);
  const coin50Row = createCoinRow('50원', ID.COIN_50);
  const coin10Row = createCoinRow('10원', ID.COIN_10);

  TableHead(coinTable, COIN_TABLE.HEADS);
  coinTable.append(coin500Row, coin100Row, coin50Row, coin10Row);

  return coinTable;
};

const ProductPurchaseMenu = () => {
  const container = Container('product-purchase-view');
  const addMoneySubTitle = SubTitle('금액 투입');
  const productSubTitle = SubTitle('구매할 수 있는 상품 현황');
  const changeSubTitle = SubTitle('잔돈');
  const addMoneyForm = createAddMoneyForm();
  const moneySpan = Span('투입한 금액: ');
  const productPurchaseTable = createProductPurchaseTable();
  const coinTable = createCoinTable();
  const returnButton = Button(
    '반환하기',
    ID.COIN_RETURN_BUTTON,
    onClickReturnCoinButton
  );

  container.append(
    addMoneySubTitle,
    addMoneyForm,
    moneySpan,
    productSubTitle,
    productPurchaseTable,
    changeSubTitle,
    returnButton,
    coinTable
  );
  container.setAttribute('class', 'invisible');

  return container;
};

export default ProductPurchaseMenu;
