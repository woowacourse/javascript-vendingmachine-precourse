import { PRODUCT } from './product.js'

//상품관리 테이블에 추가
function addProductAddTable($productName){
    const $productAddTable = document.querySelector('#product-add-table')
    $productAddTable.innerHTML += `<tr>
                                        <td>${$productName.name}</td>
                                        <td>${$productName.price}</td>
                                        <td>${$productName.quantity}</td>                                
                                    </tr>`        
}

//상품구매 테이블에 추가
function addProductPurchaseTable($productName){
    const $productPurchaseTable = document.querySelector('#product-purchase-table')
    $productPurchaseTable.innerHTML += `<tr>
                                            <td>${$productName.name}</td>
                                            <td>${$productName.price}</td>
                                            <td>${$productName.quantity}</td>
                                            <td><button id="purchase-button">구매하기</button></td>                               
                                        </tr>`        
}

//입력창 비우기
function resetProductAddInputs($productNameInput, $productPriceInput, $productQuantityInput){
    $productNameInput.value = ''
    $productPriceInput.value = ''
    $productQuantityInput.value = ''        
}

//상품추가하기 버튼 클릭시 테이블에 추가하기
export function addProductList(){
    const $productNameInput = document.querySelector('#product-name-input')
    const $productPriceInput = document.querySelector('#product-price-input')
    const $productQuantityInput = document.querySelector('#product-quantity-input')
    let $productName = document.querySelector('#product-name-input').value

    //객체 생성
    $productName = new PRODUCT($productNameInput.value, $productPriceInput.value, $productQuantityInput.value)
    $productName.getName()

    addProductAddTable($productName)
    addProductPurchaseTable($productName)
    resetProductAddInputs($productNameInput, $productPriceInput, $productQuantityInput)

}