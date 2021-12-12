import View from './View.js';

const ChargeCoinView = { ...View };

ChargeCoinView.setup = function (element) {
  this.init(element);
  return this;
};

export default ChargeCoinView;
