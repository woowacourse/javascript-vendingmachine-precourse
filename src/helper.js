const checkPrice = price => {
  if (price < constant.minimumPrice) return false;
  if (price % constant.dividingStandard !== 0) return false;
  return true;
};
