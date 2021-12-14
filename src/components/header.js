import Component from '../essential/Component.js';

export default class Header extends Component {
  template() {
    return `
        <h1>🥤자판기🥤</h1>
        <input type="button" class="menuBtns" id="product-add-menu" data-curr-menu="0" value="상품 관리" />
        <input type="button" class="menuBtns" id="vending-machine-manage-menu" data-curr-menu="1" value="잔돈 충전" />
        <input type="button" class="menuBtns" id="product-purchase-menu" data-curr-menu="2" value="상품 구매" />
    `;
  }
}
