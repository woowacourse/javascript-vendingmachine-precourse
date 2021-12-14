import { $ } from '../utils/querySelector.js';
import { getLocalStorage } from '../utils/storage.js';
import { STORAGE_NAME } from '../utils/constants.js';
import { productManageTemplate, productItemTemplate } from '../components/manage/manageTemplate.js';
import { handleProductMenuSubmit } from '../components/manage/productAddMenu.js';

export const addProductList = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    const productItem = productItemTemplate(item);
    $('.product-manage-list').insertAdjacentHTML('beforeend', productItem);
  });
};

export const showProductAddMenu = () => {
  $('#app-container').innerHTML = productManageTemplate;
  const storedProductItems = getLocalStorage(STORAGE_NAME.PRODUCT);

  if (storedProductItems) {
    addProductList(storedProductItems);
  }

  $('form').addEventListener('submit', handleProductMenuSubmit);
};
