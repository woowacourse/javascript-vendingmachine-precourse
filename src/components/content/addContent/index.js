import AddForm from './addForm/index.js';
import createTemplate from '../../utils/createTemplate.js';
import { HEADING_ADD } from './const.js';

const createAddFormContainer = () =>
  createTemplate(HEADING_ADD, new AddForm().getForm());

export { createAddFormContainer };
