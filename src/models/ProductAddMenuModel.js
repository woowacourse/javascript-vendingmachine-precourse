class ProductAddMenuModel {
  constructor() {
    this.$productItems = [];
  }

  setProductItems(items) {
    this.$productItems = items;
  }

  getProductItems() {
    return this.$productItems;
  }
}

export default ProductAddMenuModel;
