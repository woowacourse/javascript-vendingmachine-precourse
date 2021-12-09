import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import { getJsonItem, appendToJsonItem } from './index.js';

export const getProducts = () => getJsonItem(STORAGE_KEY.inventory);

export const addProduct = (productName, productPrice, productQuantity) => {
    appendToJsonItem(STORAGE_KEY.inventory, {
        productName,
        productPrice,
        productQuantity,
    });
};
