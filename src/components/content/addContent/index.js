import AddForm from './addForm/index.js';
import CurrentProductTable from './currentProductTable/index.js';
import createTemplate from '../../utils/createTemplate.js';
import { HEADING_ADD, HEADING_CURRENT_PRODUCT } from './const.js';

const createAddFormContainer = () =>
  createTemplate('add-form-container', HEADING_ADD, new AddForm().getForm());

const createCurrentProductTableContainer = () =>
  createTemplate(
    'current-product-table-container',
    HEADING_CURRENT_PRODUCT,
    new CurrentProductTable().getTable()
  );

export { createAddFormContainer, createCurrentProductTableContainer };
