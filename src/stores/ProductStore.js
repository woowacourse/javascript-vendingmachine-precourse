import Store from '../core/Store.js';
import Product from '../core/Product.js';
import { PRODUCT_ACTION_TYPE } from '../actions/product.js';
import { MESSAGE } from '../utils/constants.js';

const initialStates = {
  products: [],
  productsNameList: new Set(),
};

class ProductStore extends Store {
  setUpReducer() {
    this.reducer = {
      [PRODUCT_ACTION_TYPE.ADD_PRODUCT]: data => {
        const { name } = data;
        const { productsNameList, products } = this.state;
        if (productsNameList.has(name))
          return { SUCCESS: false, error: MESSAGE.EXISTED_PRODUCT };
        const newProducts = [...products, new Product(data)];
        this.setState({
          products: newProducts,
          productsNameList: new Set([...productsNameList, name]),
        });
        return { SUCCESS: true, error: null };
      },
    };
  }
}

export default new ProductStore(initialStates);
