import Component from "../root/Component.js";

export default class ItemSatus extends Component {
  setup() {
    console.log("ItemSatus");
  }

  template() {
    const { products } = this.$props;
    console.log("$$$$$$$$$$$$$$$", products);
    return `
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
            <thead>
                <tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>
            </thead>
            <tbody>
                ${products
                  .map((product, index) => {
                    const { name, price, quantity } = product;
                    return `
                    <tr class="product-purchase-item" data-key=${index}>
                        <td class="product-purchase-name" data-product-name="${name}">${name}</td>
                        <td class="product-purchase-price" data-product-price="${price}">${price}</td>
                        <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
                        <td><button class="purchase-button">구매하기</button></td>
                    </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }

  mounted() {
    document.querySelectorAll(".purchase-button").forEach((btn) => {
      this.addEvent("click", btn, (e) => this.onClickBtn(e));
    });
  }

  onClickBtn(e) {
    const { purchaseChargeAmount, products } = this.$props;
    const parentTr = e.target.closest("tr");
    const productKey = parentTr.getAttribute("data-key");
    const { name, price, quantity } = products[productKey];

    if (
      this.isPurchase(purchaseChargeAmount, Number(price), Number(quantity))
    ) {
      console.log("correct");
    }
  }

  isPurchase(purchaseChargeAmount, price, quantity) {
    console.log(purchaseChargeAmount, price, quantity);
    if (quantity === 0) {
      window.alert(`품절 되었습니다.`);
      return false;
    }

    if (purchaseChargeAmount < price) {
      window.alert(`금액이 부족합니다.`);
      return false;
    }

    return true;
  }
}
