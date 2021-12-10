import { STORAGE_KEY, TAP } from '../asset/constants/index.js';

export const getTap = () => localStorage.getItem(STORAGE_KEY.tap) || TAP.inventory.name;

export const setTap = (tap) => localStorage.setItem(STORAGE_KEY.tap, tap);
