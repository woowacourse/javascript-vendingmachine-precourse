import { makeHeader, makeView } from "../../views/publicView.js";

export const initializeHeader = () => {
  const $app = document.getElementById("app");
  $app.appendChild(makeHeader());
  $app.appendChild(makeView());
};

export const getQuantityText = quantity => {
  return `${quantity}개`;
};

export const saveAllToLocalStorage = vendingMachine => {
  const products = JSON.stringify(vendingMachine.getProducts());
  localStorage["products"] = products;
  localStorage["coins"] = vendingMachine.getCoins();
  localStorage["insertedMoney"] = vendingMachine.getMoney();
};

export const saveProductsToLocalStorage = vendingMachine => {
  const products = JSON.stringify(vendingMachine.getProducts());
  localStorage["products"] = products;
};

export const saveCoinsToLocalStorage = vendingMachine => {
  localStorage["coins"] = vendingMachine.getCoins();
};
