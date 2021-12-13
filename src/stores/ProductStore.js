import Store from '../core/Store.js';
import { PRODUCT_ACTION_TYPE } from '../actions/product.js';
import { MESSAGE, REDUCER_RESULT } from '../utils/constants.js';
import {
  deserializeProductsData,
  findDuplicatedProduct,
  isChangeableProduct,
  generateUpdatedProducts,
  sellProduct,
} from '../utils/helpers/product.js';
import { productStoreInitialState } from '../utils/initialStates.js';
import { ProductsStorage } from '../storages/index.js';

const initialStates =
  deserializeProductsData(ProductsStorage.get()) ?? productStoreInitialState;

class ProductStore extends Store {
  setUpReducer() {
    this.reducer = {
      [PRODUCT_ACTION_TYPE.ADD_PRODUCT]: productData => {
        const { name, price } = productData;
        const { products } = this.state;
        const duplicatedProduct = findDuplicatedProduct(name, products);

        if (!isChangeableProduct(price, duplicatedProduct)) {
          return REDUCER_RESULT.FAIL(MESSAGE.INVALID_PRODUCT);
        }
        const newProducts = generateUpdatedProducts(
          productData,
          products,
          duplicatedProduct
        );

        this.setState({ products: newProducts });
        return REDUCER_RESULT.SUCCESS();
      },

      [PRODUCT_ACTION_TYPE.SELL_PRODUCT]: productName => {
        const newProducts = sellProduct(productName, this.state.products);
        this.setState({ products: newProducts });
        return REDUCER_RESULT.SUCCESS();
      },
    };
  }
}

export default new ProductStore(initialStates, ProductsStorage);
