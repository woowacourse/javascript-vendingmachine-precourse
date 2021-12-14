export const getStorage = () => {
  return JSON.parse(localStorage.machine);
};

export const loadStorage = (instance) => {
  const parsed = getStorage();
  instance.coins = parsed.coins;
  instance.input = parsed.input;
  instance.productId = parsed.productId;
  instance.products = parsed.products;
};

export const updateStorage = (instance) => {
  localStorage.machine = JSON.stringify(instance);
};

export const checkStorage = () => {
  if (localStorage.machine === undefined) {
    return false;
  } else {
    return true;
  }
};
