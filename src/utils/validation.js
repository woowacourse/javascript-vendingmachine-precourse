export const isValidProduct = (product, products) => {
  const { name, price, quantity } = product;

  if (!isCorrectName(name, products)) {
    window.alert(
      `상품명:"${name}"은 잘못된 입력입니다. 공백 불가, 동일 상품명은 입력할 수 없습니다.`
    );
    return false;
  }

  if (!isCorrectPrice(Number(price))) {
    window.alert(
      `가격:"${price}"은 잘못된 입력입니다. 가격은 100원 이상, 10원 단위로 나누어 져야 합니다. `
    );
    return false;
  }

  if (!isCorrectQuantity(Number(quantity))) {
    window.alert(
      `수량:"${quantity}"은 잘못된 입력입니다. 양의 정수를 입력해주세요`
    );
    return false;
  }

  return true;
};

const isCorrectName = (name, products) => {
  if (name === "") return false;
  if (products.map((product) => product.name).includes(name)) return false;
  return true;
};

const isCorrectPrice = (price) => {
  console.log(price);
  if (price < 100) return false;
  if (price % 10 !== 0) return false;
  return true;
};

const isCorrectQuantity = (quantity) => quantity > 0;

export const isValidCharge = (charge) => {
  console.log(charge);
  if (!charge || charge < 10) {
    window.alert(
      `"${charge}"은 잘못된 입력입니다. 10단위로 나누어 떨어지는 10이상의 정수를 입력해주세요`
    );
    return false;
  }

  return true;
};
