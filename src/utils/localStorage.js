const APP_KEY = 'VENDING_MACHINE_PRECOURCE';

export const KEYS = {
  PRODUCT_ITEMS: 'PRODUCT_ITEMS',
  COIN_COUNT_RECORD: 'COIN_COUNT_RECORD',
  USER_AMOUNT: 'USER_AMOUNT',
  USER_RETURNED_COIN_COUNT_RECORD: 'USER_RETURNED_COIN_COUNT_RECORD',
};

class LocalStorage {
  static save(key, value) {
    localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(value));
  }

  static load(key) {
    return JSON.parse(localStorage.getItem(`${APP_KEY}_${key}`)) || undefined;
  }

  static remove(key) {
    localStorage.removeItem(`${APP_KEY}_${key}`);
  }

  static clear() {
    Object.values(KEYS).forEach((key) => {
      this.remove(key);
    });
  }
}

export default LocalStorage;
