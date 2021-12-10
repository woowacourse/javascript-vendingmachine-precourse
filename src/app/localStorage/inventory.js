import { STORAGE_KEY } from '../asset/constants/index.js';
import { getJsonItem, setJsonItem, appendToJsonItem } from './common.js';

export const getProducts = () => getJsonItem(STORAGE_KEY.inventory);

export const setProducts = (products) => setJsonItem(STORAGE_KEY.inventory, products);

export const addProduct = (productName, productPrice, productQuantity) => {
    appendToJsonItem(STORAGE_KEY.inventory, {
        productName,
        productPrice,
        productQuantity,
    });
};

export const isUniqueProductName = (candProductName) =>
    getProducts().findIndex(({ productName }) => productName === candProductName) === -1;
