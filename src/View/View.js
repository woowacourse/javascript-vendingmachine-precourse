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
    const vendingMachineManageMenu = this.createElement(
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
      vendingMachineManageMenu,
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
        this.tab = "add-product";
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
    console.log(this.productTable.children);
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
}
