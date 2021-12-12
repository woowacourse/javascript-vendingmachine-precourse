import ProductAddMenu from '../components/productAddMenu.js';

export default function ProductAddMenuView(container) {
  this.initView = ProductAddMenu();

  this.render = () => {
    container.append(this.initView);
  };
}
