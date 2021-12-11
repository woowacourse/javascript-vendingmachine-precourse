const countReturnedCoin = (price, coinValue, coinQuantity) => {
  if (coinQuantity < parseInt(price / coinValue)) {
    return coinQuantity;
  }

  return parseInt(price / coinValue);
};

export default countReturnedCoin;
