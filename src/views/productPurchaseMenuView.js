import ProductPurchaseMenu from '../components/productPurchaseMenu.js';

export default function ProductPurchaseMenuView(container) {
  this.initView = ProductPurchaseMenu();

  this.render = () => {
    container.append(this.initView);
  };
}
