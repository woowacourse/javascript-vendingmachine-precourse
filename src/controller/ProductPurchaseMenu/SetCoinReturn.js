import { LOCAL_STORAGE, TEMPLATE, NUMBER, STRING, COIN } from '../../utils/constant.js';

export default class SetCoinReturn {
  constructor(render, coins, vendingMachine) {
    this.render = render;
    this.coins = coins;
    this.vendingMachine = vendingMachine;
  }

  spendCoin = (vendingMachineCoinQuantity, currentCoin, vendingMachineCoinAmount, userCoinAmount) => {
    while (vendingMachineCoinQuantity > NUMBER.ZERO && userCoinAmount - currentCoin >= NUMBER.ZERO) {
      userCoinAmount -= currentCoin;
      vendingMachineCoinAmount -= currentCoin;
      vendingMachineCoinQuantity -= NUMBER.ONE;
    }

    return [vendingMachineCoinQuantity, vendingMachineCoinAmount, userCoinAmount];
  };

  compareVendingMachineCoinAndUserCoin = (vendingMachineCoinQuantityHash, vendingMachineCoinAmount, userCoinAmount) => {
    COIN.LIST.forEach((currentCoin) => {
      const [spendVendingMachineCoinQuantity, spendVendingMachineCoinAmount, spendUserCoinAmount] = this.spendCoin(
        vendingMachineCoinQuantityHash[currentCoin],
        currentCoin,
        vendingMachineCoinAmount,
        userCoinAmount
      );
      vendingMachineCoinQuantityHash[currentCoin] -= spendVendingMachineCoinQuantity;
      vendingMachineCoinAmount = spendVendingMachineCoinAmount;
      userCoinAmount = spendUserCoinAmount;
    });

    return [vendingMachineCoinQuantityHash, vendingMachineCoinAmount, userCoinAmount];
  };

  renderReturnCoin = (vendingMachineCoinQuantityHash) => {
    this.render.returnCoinTemplate(vendingMachineCoinQuantityHash);
  };

  hasReturnCoin = () => {
    const [vendingMachineCoinQuantityHash, vendingMachineCoinAmount, userCoinAmount] =
      this.compareVendingMachineCoinAndUserCoin(
        { ...this.coins.getCoinsHash() },
        this.coins.getCoinAmount(),
        this.vendingMachine.getChargeAmount()
      );

    this.coins.replaceCoinsHash(vendingMachineCoinQuantityHash);
    this.coins.replaceCoinAmount(vendingMachineCoinAmount);
    this.vendingMachine.replaceChargeAmount(userCoinAmount);
    this.renderReturnCoin(vendingMachineCoinQuantityHash);
  };

  renderPurchaseChargeAmount = () => {
    this.render.purchaseChargeAmountTemplate();
  };

  replaceManageChargeAmount = (previousCoinAmount, currentCoinAmount) => {
    this.vendingMachineManageMenuTemplate = this.vendingMachineManageMenuTemplate.replace(
      TEMPLATE.VENDING_MACHINE_CHARGE_AMOUNT(previousCoinAmount + STRING.WON),
      TEMPLATE.VENDING_MACHINE_CHARGE_AMOUNT(currentCoinAmount + STRING.WON)
    );
  };

  replaceManageCoin = (previousCoinEntries, currentCoinEnries) => {
    previousCoinEntries.forEach((previousCoinEntry, index) => {
      const [previousCoin, previousCoinQuantity] = previousCoinEntry;
      const [currentCoin, currentCoinQuantity] = currentCoinEnries[index];

      this.vendingMachineManageMenuTemplate = this.vendingMachineManageMenuTemplate.replace(
        TEMPLATE.VENDING_MACHINE_COIN(previousCoin, previousCoinQuantity),
        TEMPLATE.VENDING_MACHINE_COIN(currentCoin, currentCoinQuantity)
      );
    });
  };

  reRenderMachineManageMenu = (previousCoinEntries, previousCoinAmount) => {
    this.vendingMachineManageMenuTemplate = localStorage.getItem(LOCAL_STORAGE.VENDING_MACHINE_MANAGE_MENU);
    const currentCoinEnries = Object.entries(this.coins.getCoinsHash());
    const currentCoinAmount = this.coins.getCoinAmount();

    this.replaceManageChargeAmount(previousCoinAmount, currentCoinAmount);
    this.replaceManageCoin(previousCoinEntries, currentCoinEnries);
    this.render.reRenderVendingMachineManageMenuTemplate(this.vendingMachineManageMenuTemplate);
  };

  main = (previousCoinsHash, previousCoinAmount) => {
    this.hasReturnCoin();
    this.renderPurchaseChargeAmount();
    this.reRenderMachineManageMenu(Object.entries(previousCoinsHash), previousCoinAmount);
  };
}
