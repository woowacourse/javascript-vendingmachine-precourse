import { $ } from '../utils/querySelector.js';
import { purchaseAbleListTemplate } from '../components/purchase/productPurchaseTemplate.js';
import { productItemTemplate } from '../components/manage/manageTemplate.js';

export const showCurrentAmount = (targetId, currentAmount) => {
  $(targetId).innerHTML = currentAmount;
};

export const initProductPurchaseList = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    const productItem = purchaseAbleListTemplate(item);
    $('#product-purchase-list').insertAdjacentHTML('beforeend', productItem);
  });
};

export const initProductManageScreen = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    const productItem = productItemTemplate(item);
    $('.product-manage-list').insertAdjacentHTML('beforeend', productItem);
  });
};
