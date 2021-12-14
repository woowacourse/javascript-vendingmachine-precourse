export default class ProductAddTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productAddScreen = document.createElement('div');
    this.productAddScreen.id = 'product-add-screen';
    this.app.append(this.productAddScreen);
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.productAddDiv = document.createElement('div');
    this.productStatusDiv = document.createElement('div');
    this.productAddScreen.append(this.productAddDiv, this.productStatusDiv);
    this.makeProductAdd();
    this.makeProductStatus();
  }

  makeProductAdd() {
    const productAddTitle = document.createElement('h2');
    productAddTitle.innerText = '상품 추가하기';
    const inputProductAdd = document.createElement('form');
    inputProductAdd.id = 'input-product-add';
    inputProductAdd.innerHTML =
      '<input type="text" placeholder="상품명" id="product-name-input" /><input type="text" placeholder="가격" id="product-price-input" /><input type="text" placeholder="수량" id="product-quantity-input" /><button type="submit" id="product-add-button">추가하기</button>';
    this.productAddDiv.append(productAddTitle, inputProductAdd);
  }

  makeProductStatus() {
    const productStatusTitle = document.createElement('h2');
    productStatusTitle.innerText = '상품 현황';
    this.productStatusTable = document.createElement('table');
    this.makeTableElement();
    this.productStatusDiv.append(productStatusTitle, this.productStatusTable);
  }

  makeTableElement() {
    const productStatusTableHead = document.createElement('thead');
    productStatusTableHead.innerHTML =
      '<tr><th>상품명</th><th>가격</th><th>수량</th></tr>';
    const productStatusTableBody = document.createElement('tbody');
    productStatusTableBody.id = 'product-add-status-table-body';
    this.productStatusTable.append(
      productStatusTableHead,
      productStatusTableBody
    );
  }
}
