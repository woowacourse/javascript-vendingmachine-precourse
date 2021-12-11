import AddForm from './addForm/index.js';
import CurrentProductTable from './currentProductTable/index.js';
import createTemplate from '../utils/createTemplate.js';
import { HEADING_ADD, HEADING_CURRENT_PRODUCT } from './const.js';

const createAddFormContainer = () => {
  const container = createTemplate('add-form-container', HEADING_ADD);
  container.appendChild(new AddForm().getForm());
  return container;
};

const createCurrentProductTableContainer = (products) => {
  const container = createTemplate(
    'current-product-table-container',
    HEADING_CURRENT_PRODUCT
  );
  container.appendChild(new CurrentProductTable(products).getTable());
  return container;
};

export { createAddFormContainer, createCurrentProductTableContainer };
