import { $ } from '../utils/querySelector.js';
import { getLocalStorage } from '../utils/storage.js';
import { STORAGE_NAME } from '../utils/constants.js';
import { productManageTemplate } from '../components/manage/manageTemplate.js';
import { handleProductMenuSubmit } from '../components/manage/productAddMenu.js';
import { initProductManageScreen } from './view.js';

export const showProductAddMenu = () => {
  $('#app-container').innerHTML = productManageTemplate;
  const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);

  if (storedProductItems) {
    initProductManageScreen(storedProductItems);
  }

  $('form').addEventListener('submit', handleProductMenuSubmit);
};
