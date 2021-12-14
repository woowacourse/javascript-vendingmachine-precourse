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
    this.productAddTitle = document.createElement('h2');
    this.productAddTitle.innerText = '상품 추가하기';
    this.inputProductAdd = document.createElement('form');
    this.inputProductAdd.id = 'input-product-add';
    this.inputProductAdd.innerHTML =
      '<input type="text" placeholder="상품명" id="product-name-input" /><input type="text" placeholder="가격" id="product-price-input" /><input type="text" placeholder="수량" id="product-quantity-input" /><button type="submit" id="product-add-button">추가하기</button>';
    this.productAddDiv.append(this.productAddTitle, this.inputProductAdd);
  }

  makeProductStatus() {
    this.productStatusTitle = document.createElement('h2');
    this.productStatusTitle.innerText = '상품 현황';
    this.productStatusTable = document.createElement('table');
    this.makeTableElement();
    this.productStatusDiv.append(
      this.productStatusTitle,
      this.productStatusTable
    );
  }

  makeTableElement() {
    this.productStatusTableHead = document.createElement('thead');
    this.productStatusTableHead.innerHTML =
      '<tr><th>상품명</th><th>가격</th><th>수량</th></tr>';
    this.productStatusTableBody = document.createElement('tbody');
    this.productStatusTableBody.id = 'product-add-status-table-body';
    this.productStatusTable.append(
      this.productStatusTableHead,
      this.productStatusTableBody
    );
  }
}
