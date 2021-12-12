import Store from '../core/Store.js';
import Product from '../core/Product.js';
import { PRODUCT_ACTION_TYPE } from '../actions/product.js';
import { MESSAGE } from '../utils/constants.js';
import {
  serializeProductsData,
  hasDuplicatedProductName,
} from '../utils/helpers.js';
import ProductStorage from '../storages/ProductStorage.js';

const initialStates = serializeProductsData(ProductStorage.get()) ?? {
  products: [],
};

class ProductStore extends Store {
  setUpReducer() {
    this.reducer = {
      [PRODUCT_ACTION_TYPE.ADD_PRODUCT]: data => {
        const { name } = data;
        const { products } = this.state;
        if (hasDuplicatedProductName(name, products))
          return { SUCCESS: false, error: MESSAGE.EXISTED_PRODUCT };
        const newProducts = [...products, new Product(data)];
        this.setState({
          products: newProducts,
        });
        return { SUCCESS: true, error: null };
      },
      [PRODUCT_ACTION_TYPE.SELL_PRODUCT]: productName => {
        const { products } = this.state;
        const newProducts = products.map(item => {
          const { name } = item.getInformation();
          if (name === productName) item.sellProduct();
          return item;
        });
        this.setState({ products: newProducts });
      },
    };
  }
}

export default new ProductStore(initialStates, ProductStorage);
