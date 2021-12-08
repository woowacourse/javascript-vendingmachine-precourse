const resetAddProductInput = () => {
  const $productName = document.getElementById("product-name-input");
  const $productPrice = document.getElementById("product-price-input");
  const $productQuantity = document.getElementById("product-quantity-input");

  $productName.value = "";
  $productPrice.value = "";
  $productQuantity.value = "";
};

export { resetAddProductInput };
