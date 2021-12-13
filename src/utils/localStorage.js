export const setLocalStorage = (products, money, clientMoney) => {
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('money', JSON.stringify(money));
  localStorage.setItem('clientMoney', clientMoney);
};

export const getLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  const money = JSON.parse(localStorage.getItem('money'));
  const clientMoney = JSON.parse(localStorage.getItem('clientMoney'));

  return [products, money, clientMoney];
};
