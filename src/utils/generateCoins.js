import { default as DB } from '../model/database.js';

const generateCoins = charge => {
  const wallet = DB.load('vendingMachineCharge');
  console.log(wallet);
  //while()
};

export default generateCoins;
