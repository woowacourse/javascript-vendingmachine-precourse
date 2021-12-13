export function productAddValiate(product) {
  let result = true;
  if (product[0] === "" && product[1] === "" && product[2] === "") {
    alert("상품 정보를 모두 기입해주세요");
    result = false;
  } else if (Number(product[1]) < 100) {
    alert("상품 가격을 100원 이상으로 기입해주세요");
    result = false;
  } else if (Number(product[1]) % 10 !== 0 ) {
    alert("상품 가격을 10원 단위 이상으로 기입해주세요");
    result = false;
  } else if (Number(product[2]) - parseInt(Number(product[2])) !== 0) {
    alert("상품 수량에 소수점을 기입하지 말아주세요");
    result = false;
  } else if (Number(product[2]) <= 0 ) {
    alert("상품 수량을 자연수로 기입해주세요");
    result = false;
  }

  return result;
}