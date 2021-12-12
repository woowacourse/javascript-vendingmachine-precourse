export const isValidName = nameInput => {
  if (nameInput === '') {
    alert('상품명이 공백입니다. 다시 입력하세요.');
    return false;
  }
  return true;
};

export const isValidPrice = priceInput => {
  if (priceInput === '') {
    alert('가격을 입력하지 않았습니다. 다시 입력하세요.');
    return false;
  }
  if (Number(priceInput) < 100) {
    alert('상품 가격은 100원 이상만 입력 가능합니다. 다시 입력하세요.');
    return false;
  }
  if (Number(priceInput) % 10 !== 0) {
    alert('상품 가격은 10원으로 나눠져야합니다. 다시 입력하세요.');
    return false;
  }
  return true;
};

export const isValidQuantity = quantityInput => {
  if (quantityInput === '') {
    alert('수량이 입력되지 않았습니다. 다시 입력하세요.');
    return false;
  }
  if (Number(quantityInput) < 1) {
    alert('수량은 1개 이상 입력되어야합니다. 다시 입력하세요.');
    return false;
  }
  return true;
};
