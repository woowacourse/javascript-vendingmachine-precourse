import { $ } from '../../utils/querySelector.js';
import { productPurchaseTemplate } from './productPurchaseTemplate.js';

export const showProductPurchase = () => {
  $('#app-container').innerHTML = productPurchaseTemplate;
};
