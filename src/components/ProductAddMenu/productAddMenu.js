import { ID } from '../../constants/selector.js';
import { PRODUCT_TABLE } from '../../constants/table.js';
import {
  Form,
  Input,
  ButtonWithId,
  Table,
  TableHead,
  TableRowWithClassName,
  TableDataWithClassName,
} from '../elements.js';

export const createProductForm = (event) => {
  const productForm = Form();
  const productNameInput = Input(ID.PRODUCT_NAME_INPUT, 'text', '상품명');
  const productPriceInput = Input(ID.PRODUCT_PRICE_INPUT, 'number', '가격');
  const productQuantityInput = Input(
    ID.PRODUCT_QUANTITY_INPUT,
    'number',
    '수량'
  );
  const addButton = ButtonWithId('추가하기', ID.PRODUCT_ADD_BUTTON, event);

  productForm.append(
    productNameInput,
    productPriceInput,
    productQuantityInput,
    addButton
  );

  return productForm;
};

export const createProductRow = (datas, trClassName, tdClassNames) => {
  const tr = TableRowWithClassName(trClassName);
  datas.forEach((data, index) => {
    const td = TableDataWithClassName(data, tdClassNames[index]);
    tr.append(td);
  });

  return tr;
};

export const createProductTable = () => {
  const productTable = Table('product-table');
  TableHead(productTable, PRODUCT_TABLE.HEADS);

  return productTable;
};
