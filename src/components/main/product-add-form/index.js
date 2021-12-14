import Component from '../../../core/Component.js';

export default class ProductAddForm extends Component {
  template() {
    return `
        <h3>상품 추가하기</h3>
        <form>
          <input type="text" id="product-name-input" placeholder="상품명" maxlength="15" />
          <input type="number" id="product-price-input" placeholder="가격" />
          <input type="number" id="product-quantity-input" placeholder="수량" />
          <button id="product-add-button">추가하기</button>
        </form>
      `;
  }

  setEvent() {
    const { addProduct } = this.$props;

    this.addEvent('click', '#product-add-button', ({ target }) => {
      const $name = this.$target.querySelector('#product-name-input');
      const $price = this.$target.querySelector('#product-price-input');
      const $quantity = this.$target.querySelector('#product-quantity-input');
      const item = {
        name: $name.value,
        price: $price.value,
        quantity: $quantity.value,
      };
      addProduct(item);
    });
  }
}
