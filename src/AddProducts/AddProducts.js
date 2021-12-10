import {
  createContainer,
  createElements,
  createInitialGrid,
  customCreateElement,
} from '../CreateElementUtils.js';
import {
  PRODUCT_TAB_FORM_CONTAINER_ITEMS,
  ID_PRODUCT_ADD_TAB,
  ID_PRODUCT_ADD_STATUS,
  TITLE_CURRENT_STATUS,
  CURRENT_GRID_HEADERS,
  VAL_GRID_COLUMN_SIZE,
} from './AddProducts.constants.js';

export default class AddProducts {
  constructor() {
    this.section = this.createAddProductTab();
  }

  createAddProductTab() {
    const formContainer = this.constructor.createFormContainer();
    const currentContainer = this.constructor.createCurrentContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, currentContainer],
      ID_PRODUCT_ADD_TAB,
    );
  }

  static createFormContainer() {
    return createContainer(
      document.createElement('div'),
      createElements(PRODUCT_TAB_FORM_CONTAINER_ITEMS),
    );
  }

  static createCurrentContainer() {
    const grid = createInitialGrid(
      ID_PRODUCT_ADD_STATUS,
      VAL_GRID_COLUMN_SIZE,
      CURRENT_GRID_HEADERS,
    );

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_CURRENT_STATUS,
      }),
      grid,
    ]);
  }
}
