import { $ } from '../../utils/querySelector.js';
import { getProductItemStorage } from '../storage/product.js';
import { initProductPurchaseList, productPurchaseTemplate } from './productPurchaseTemplate.js';

export const showProductPurchase = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
  const storedProductList = getProductItemStorage();

  if (storedProductList) {
    initProductPurchaseList(storedProductList);
  }
};
