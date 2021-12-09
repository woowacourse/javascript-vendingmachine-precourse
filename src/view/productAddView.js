import { makeElement } from "../utils.js";

const productAddView = container => {
  console.log(`판매할 상품 넣는 페이지`);
  const test = makeElement({ tag: "span", innerText: "판매할 상품 넣는 페이지" });
  container.append(test);
};

export default productAddView;
