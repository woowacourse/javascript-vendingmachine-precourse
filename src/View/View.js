export default class View {
  constructor() {
    this.app = document.getElementById("app");
    const title = this.createElement("h1", "vending-machine", "🥤자판기🥤");
    this.menu = this.createElement("div", "menu");
    this.productAddMenu = this.createElement(
      "button",
      "product-add-menu",
      "상품 구매"
    );
    this.vendingMachineManageMenu = this.createElement(
      "button",
      "vending-machine-manage-menu",
      "잔돈 충전"
    );
    const productPurchaseMenu = this.createElement(
      "button",
      "product-purchase-menu",
      "상품 관리"
    );

    this.menu.append(
      this.productAddMenu,
      this.vendingMachineManageMenu,
      productPurchaseMenu
    );
    this.app.append(title);
    this.app.append(this.menu);
    this.form = this.createElement("div", "form");
    this.app.append(this.form);
    this.displayProductAdd();
  }

  createElement(tag, id, textContent) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (textContent) element.textContent = textContent;

    return element;
  }

  displayProductAdd(product) {
    this.productAddMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.addProductForm) {
        this.addProductForm = this.createElement("div");
        this.title = this.createElement(
          "h3",
          "add-product-title",
          "상품 추가하기"
        );
        this.productNameInput = this.createElement(
          "input",
          "product-name-input"
        );
        this.productNameInput.placeholder = "상품명";
        this.productPriceInput = this.createElement(
          "input",
          "product-price-input"
        );
        this.productPriceInput.type = "number";
        this.productPriceInput.placeholder = "가격";
        this.productQuantityInput = this.createElement(
          "input",
          "product-quantity-input"
        );
        this.productQuantityInput.type = "number";
        this.productQuantityInput.placeholder = "수량";
        this.productAddButton = this.createElement(
          "button",
          "product-add-button",
          "추가하기"
        );
        const presentTitle = this.createElement(
          "h3",
          "present-title",
          "상품 현황"
        );
        this.productTable = this.createElement("table");
        this.tr = this.createElement("tr");
        this.thProductName = this.createElement("th", "th", "상품명");
        this.thPrice = this.createElement("th", "th", "가격");
        this.thQuantity = this.createElement("th", "th", "수량");
        this.tr.append(this.thProductName, this.thPrice, this.thQuantity);
        this.productTable.append(this.tr);

        this.addProductForm.append(
          this.title,
          this.productNameInput,
          this.productPriceInput,
          this.productQuantityInput,
          this.productAddButton,
          presentTitle,
          this.productTable
        );
      }
      if (this.form.children.length !== 0) {
        this.form.removeChild(this.form.lastChild);
      }
      this.form.append(this.addProductForm);
      if (product) this.displayProductAddChange(product);
    });
  }

  bindProductAdd(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === "product-add-button") {
        handler(
          this.productNameInput.value,
          this.productPriceInput.value,
          this.productQuantityInput.value
        );
        this.productNameInput.value = "";
        this.productPriceInput.value = "";
        this.productQuantityInput.value = "";
      }
    });
  }

  displayProductAddChange(product) {
    // 초기화
    while (this.productTable.children.length > 1) {
      this.productTable.removeChild(this.productTable.lastChild);
    }

    product.forEach((value) => {
      const tr = this.createElement("tr");
      tr.className = "product-manage-item";
      const productManageName = this.createElement("td", "td", value.name);
      productManageName.className = "product-manage-name";
      const productManagePrice = this.createElement("td", "td", value.price);
      productManagePrice.className = "product-manage-price";
      const productManageQuantity = this.createElement(
        "td",
        "td",
        value.quantity
      );
      productManageQuantity.className = "product-manage-quantity";
      tr.append(productManageName, productManagePrice, productManageQuantity);
      this.productTable.append(tr);
    });
  }

  displayChargeCoin() {
    this.vendingMachineManageMenu.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.chargeCoinForm) {
        this.chargeCoinForm = this.createElement("div");
        const title = this.createElement(
          "h3",
          "charge-coin-title",
          "자판기 동전 충전하기"
        );
        this.vendingMachineChargeInput = this.createElement(
          "input",
          "vending-machine-charge-input"
        );
        this.vendingMachineChargeInput.placeholder = "자판기가 보유할 금액";
        this.vendingMachineChargeInput.type = "number";
        this.vendingMachineChargeButton = this.createElement(
          "button",
          "vending-machine-charge-button",
          "충전하기"
        );
        this.vendingMachinePresentAmount = this.createElement(
          "div",
          "vending-machine-present-amount",
          "보유 금액: "
        );
        this.vendingMachinechargeAmount = this.createElement(
          "span",
          "vending-machine-charge-amount"
        );
        this.vendingMachinePresentAmount.append(
          this.vendingMachinechargeAmount
        );
        const coinTitle = this.createElement(
          "h3",
          "coinTitle",
          "자판기가 보유한 동전"
        );
        this.coinTable = this.createElement("table", "coinTable");
        const tr = this.createElement("tr");
        this.coinType = this.createElement("th", "coinType", "동전");
        this.coinCount = this.createElement("th", "coinCount", "개수");
        tr.append(this.coinType, this.coinCount);
        const trFiveHoundred = this.createElement("tr");
        this.fiveHoundred = this.createElement("td", "fiveHoundred", "500원");
        this.fiveHoundredCount = this.createElement("td", "fiveHoundredCount");
        trFiveHoundred.append(this.fiveHoundred, this.fiveHoundredCount);
        const trOneHundred = this.createElement("tr");
        this.oneHundred = this.createElement("td", "oneHundred", "100원");
        this.oneHundredCount = this.createElement("td", "oneHundredCount");
        trOneHundred.append(this.oneHundred, this.oneHundredCount);
        const trFifty = this.createElement("tr");
        this.fifty = this.createElement("td", "fifty", "50원");
        this.fiftyCount = this.createElement("td", "fiftyCount");
        trFifty.append(this.fifty, this.fiftyCount);
        const trTen = this.createElement("tr");
        this.ten = this.createElement("td", "ten", "10원");
        this.tenCount = this.createElement("td", "ten");
        trTen.append(this.ten, this.tenCount);

        this.coinTable.append(tr, trFiveHoundred, trOneHundred, trFifty, trTen);
        this.chargeCoinForm.append(
          title,
          this.vendingMachineChargeInput,
          this.vendingMachineChargeButton,
          this.vendingMachinePresentAmount,
          coinTitle,
          this.coinTable
        );
      }
      if (this.form.children.length !== 0) {
        this.form.removeChild(this.form.lastChild);
      }
      this.form.append(this.chargeCoinForm);
    });
  }

  bindChargeCoin(handler) {
    this.form.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.id === "vending-machine-charge-button") {
        const presentMoney = handler(this.vendingMachineChargeInput.value);
        this.vendingMachineChargeInput.value = "";
        if (presentMoney) {
          let nowMoney = this.vendingMachinechargeAmount.innerHTML;
          nowMoney = +nowMoney + +presentMoney;
          this.vendingMachinechargeAmount.innerHTML = nowMoney;
        }
      }
    });
  }
}
