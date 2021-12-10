import STORAGE_KEY from '../asset/constants/STORAGE_KEY.js';
import TAP from '../asset/constants/TAP.js';

export const getTap = () => localStorage.getItem(STORAGE_KEY.tap) || TAP.inventory.name;

export const setTap = (tap) => localStorage.setItem(STORAGE_KEY.tap, tap);
