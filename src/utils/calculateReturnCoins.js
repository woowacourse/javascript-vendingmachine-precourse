import { default as DB } from '../model/database.js';

const calculateReturnCoins = () => {
  const charge = DB.load('chargeToPurchaseProduct');
  const coins = DB.load('vendingMachineCoins');
};

export default calculateReturnCoins;
