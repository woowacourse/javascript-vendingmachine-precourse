import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import { getJsonItem, setJsonItem, appendToJsonItem } from './index.js';

export const getProducts = () => getJsonItem(STORAGE_KEY.inventory);

export const addProduct = (productName, productPrice, productQuantity) => {
    appendToJsonItem(STORAGE_KEY.inventory, {
        productName,
        productPrice,
        productQuantity,
    });
};

export const setProducts = (products) => setJsonItem(STORAGE_KEY.inventory, products);

export const isUniqueProductName = (candProductName) =>
    getProducts().findIndex(({ productName }) => productName === candProductName) === -1;
