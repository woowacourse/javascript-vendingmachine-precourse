import { default as DB } from '../model/database.js';

const convertChargeIntoCoin = charge => {
  const wallet = DB.load('vendingMachineCharge')[0];
  console.log(wallet);
  //while()
};

export default convertChargeIntoCoin;
