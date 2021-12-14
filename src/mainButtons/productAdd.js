import AddMode from '../addMode/addMode.js';

export default function ProductAdd() {
  const productAdd = document.createElement('button');
  productAdd.id = "product-add-menu";
  productAdd.innerText = "상품 관리";
  productAdd.style = "margin-right:10px";
  productAdd.addEventListener("click", AddMode);
  return productAdd;
}