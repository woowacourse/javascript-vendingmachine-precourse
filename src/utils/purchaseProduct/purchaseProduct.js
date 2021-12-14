import { store } from '../common/store.js';
import { ERROR_MSG } from '../../constants/constants.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';

export const purchaseProduct = (e, state) => {
  const products = e.target.closest('tr').childNodes;
  const id = e.target.closest('tr').dataset.productId;
  const price = products[3].dataset.productPrice;
  let quantity = products[5].dataset.productQuantity;

  if (price > state.purchase.input) {
    alert(ERROR_MSG.INSUFFICIENT_CASH);
    return;
  }

  if (quantity <= 0) {
    alert(ERROR_MSG.SOLD_OUT);
    return;
  }

  if (state.purchase.input >= price) {
    state.purchase.input = Number(state.purchase.input) - Number(price);
  } else {
    alert(ERROR_MSG.INSUFFICIENT_CASH);
    return;
  }

  state.products = state.products.map(product =>
    product.id === id
      ? { ...product, quantity: product.quantity - 1 }
      : product,
  );

  store.setData(state);
  renderPurchaseProduct(state);
};
