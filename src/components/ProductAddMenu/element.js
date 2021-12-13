import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
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
  const productNameInput = Input(
    ID.PRODUCT_NAME_INPUT,
    'text',
    MACHINE.INPUT.PRODUCT_NAME
  );
  const productPriceInput = Input(
    ID.PRODUCT_PRICE_INPUT,
    'number',
    MACHINE.INPUT.PRODUCT_PRICE
  );
  const productQuantityInput = Input(
    ID.PRODUCT_QUANTITY_INPUT,
    'number',
    MACHINE.INPUT.PRODUCT_QUANTITY
  );
  const addButton = ButtonWithId(
    MACHINE.BUTTON.ADD_PRODUCT,
    ID.PRODUCT_ADD_BUTTON,
    event
  );

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
  const productTable = Table(ID.PRODUCT_TABLE);
  TableHead(productTable, MACHINE.TABLE.PRODUCT_HEADS);

  return productTable;
};
