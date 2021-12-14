import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import {
  SubTitle,
  Form,
  Input,
  ButtonWithId,
  TableWithHead,
  TableRowWithClassName,
  TableDataWithClassName,
} from '../Element/domElement.js';

const createProductInput = () => {
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

  return [productNameInput, productPriceInput, productQuantityInput];
};

const createProductForm = (event) => {
  const productForm = Form();
  const productInput = createProductInput();
  const addButton = ButtonWithId(
    MACHINE.BUTTON.ADD_PRODUCT,
    ID.PRODUCT_ADD_BUTTON,
    event
  );

  productForm.append(...productInput, addButton);

  return productForm;
};

export const productAddForm = (event) => {
  const addProductSubTitle = SubTitle(MACHINE.SUBTITLE.ADD_PRODUCT);
  const productForm = createProductForm(event);

  return [addProductSubTitle, productForm];
};

export const productStatusTable = () => {
  const productStatusSubTitle = SubTitle(MACHINE.SUBTITLE.PRODUCT_STATUS);
  const productTable = TableWithHead(
    ID.PRODUCT_TABLE,
    MACHINE.TABLE.PRODUCT_HEADS
  );

  return [productStatusSubTitle, productTable];
};

export const createProductRow = (datas, trClassName, tdClassNames) => {
  const tr = TableRowWithClassName(trClassName);

  datas.forEach((data, index) => {
    const td = TableDataWithClassName(data, tdClassNames[index]);
    tr.append(td);
  });

  return tr;
};
