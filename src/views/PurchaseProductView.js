import View from './View.js';

const PurchaseProductView = { ...View };

PurchaseProductView.setup = function (element) {
  this.init(element);
  return this;
};

export default PurchaseProductView;
