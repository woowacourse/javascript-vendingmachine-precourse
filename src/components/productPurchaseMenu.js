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
  const tableHeaders = TableHead(PRODUCT_PURCHASE_TABLE.HEADS);

  productPurchaseTable.innerHTML += tableHeaders;

  return productPurchaseTable;
};

const createCoinTable = () => {
  const coinTable = Table();
  const tableHeaders = TableHead(COIN_TABLE.HEADS);

  coinTable.innerHTML += tableHeaders;

  return coinTable;
};

const ProductPurchaseMenu = () => {
  const container = Container('product-purchase');
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

  return container;
};

export default ProductPurchaseMenu;
