import { ID } from '../constants/selector.js';
import { PRODUCT_TABLE } from '../constants/table.js';
import {
  Container,
  SubTitle,
  Form,
  Input,
  Button,
  Table,
  TableHead,
} from './elements.js';

const onClickAddButton = (e) => {
  e.preventDefault();
};

const createProductForm = () => {
  const productForm = Form();
  const productNameInput = Input(ID.PRODUCT_NAME_INPUT, 'text', '상품명');
  const productPriceInput = Input(ID.PRODUCT_PRICE_INPUT, 'number', '가격');
  const productQuantityInput = Input(
    ID.PRODUCT_QUANTITY_INPUT,
    'number',
    '수량'
  );
  const addButton = Button('추가하기', ID.PRODUCT_ADD_BUTTON, onClickAddButton);

  productForm.append(
    productNameInput,
    productPriceInput,
    productQuantityInput,
    addButton
  );

  return productForm;
};

const createProductTable = () => {
  const productTable = Table();
  const tableHeaders = TableHead(PRODUCT_TABLE.HEADS);

  productTable.innerHTML += tableHeaders;

  return productTable;
};

const ProductAddMenu = () => {
  const container = Container('product-add-view');
  const addProductSubTitle = SubTitle('상품 추가하기');
  const productStatusSubTitle = SubTitle('상품 현황');
  const productForm = createProductForm();
  const productTable = createProductTable();

  container.append(
    addProductSubTitle,
    productForm,
    productStatusSubTitle,
    productTable
  );
  container.setAttribute('class', 'invisible');

  return container;
};

export default ProductAddMenu;
