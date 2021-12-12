import Store from '../core/Store.js';
import Product from '../core/class/Product.js';
import { PRODUCT_ACTION_TYPE } from '../actions/product.js';
import { MESSAGE } from '../utils/constants.js';
import {
  deserializeProductsData,
  hasDuplicatedProductName,
} from '../utils/helpers/product.js';
import { productStoreInitialState } from '../utils/initialStates.js';
import { ProductsStorage } from '../storages/index.js';

const initialStates =
  deserializeProductsData(ProductsStorage.get()) ?? productStoreInitialState;

class ProductStore extends Store {
  setUpReducer() {
    this.reducer = {
      [PRODUCT_ACTION_TYPE.ADD_PRODUCT]: productData => {
        const { name } = productData;
        const { products } = this.state;

        if (hasDuplicatedProductName(name, products))
          return { SUCCESS: false, error: MESSAGE.EXISTED_PRODUCT };

        this.setState({
          products: [...products, new Product(productData)],
        });
        return { SUCCESS: true, error: null };
      },
      [PRODUCT_ACTION_TYPE.SELL_PRODUCT]: productName => {
        const newProducts = this.state.products.map(item => {
          const { name } = item.getInformation();
          if (name === productName) item.sellProduct();
          return item;
        });
        this.setState({ products: newProducts });
      },
    };
  }
}

export default new ProductStore(initialStates, ProductsStorage);
