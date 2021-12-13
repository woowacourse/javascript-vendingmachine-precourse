import Storage from '../core/Storage.js';
import { deserializeProductsData } from '../utils/helpers/product.js';

export const ChangesStorage = new Storage('changes');
export const ProductsStorage = new Storage('products', deserializeProductsData);
export const UserStorage = new Storage('user');
