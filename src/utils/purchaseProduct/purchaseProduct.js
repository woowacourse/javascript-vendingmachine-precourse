import { store } from '../common/store.js';
import { ERROR_MSG } from '../../constants/constants.js';
import { renderPurchaseProduct } from './renderPurchaseProduct.js';

export const purchaseProduct = (e, state) => {
  const products = e.target.closest('tr').childNodes;
  const id = e.target.closest('tr').dataset.productId;
  const name = products[1].dataset.productName;
  const price = products[3].dataset.productPrice;
  let quantity = products[5].dataset.productQuantity;

  state.products = state.products.map(product => {
    if (!product.quantity) {
      alert(ERROR_MSG.SOLD_OUT);
      return product;
    }

    if (product.id === id)
      return { ...product, quantity: product.quantity - 1 };
    else return product;
  });

  if (!quantity) {
    state.purchase.input = Number(state.purchase.input) - Number(price);
  }

  store.setData(state);
  renderPurchaseProduct(state);
};
