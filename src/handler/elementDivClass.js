export class ProductAdd {
  constructor() {
    this.btn = document.querySelector('#product-add-menu');
    this.div = document.querySelector('#product-add-div');
  }

  setVisible(boo) {
    if (boo) {
      this.div.style.visibility = 'visible';
      return true;
    }
    this.div.style.visibility = 'hidden';
  }
}

export class VendingMachine {
  constructor() {
    this.btn = document.querySelector('#vending-machine-manage-menu');
    this.div = document.querySelector('#vending-machine-charge');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.div.style.visibility = 'visible';
      return true;
    }
    this.div.style.visibility = 'hidden';
  }
}

export class ProductPurchase {
  constructor() {
    this.btn = document.querySelector('#product-purchase-menu');
    this.div = document.querySelector('#product-purchase-div');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.div.style.visibility = 'visible';
      return true;
    }
    this.div.style.visibility = 'hidden';
  }
}
