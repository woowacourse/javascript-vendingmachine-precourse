import { ERROR_MESSAGE, GAME } from './product.js'

//공백 예외처리
    function checkProducBlanktValid($productNameInput, $productPriceInput, $productQuantityInput){
        if($productNameInput.value === ''){
            return false
        }
        if($productNameInput.value.trim() === ''){
            return false
        }
        if($productPriceInput.value === ''){
            return false
        }
        if($productQuantityInput.value === ''){
            return false
        }
        return true
    }

    //가격 예외처리
    function checkProductPriceValid($productPriceInput){
        if($productPriceInput.value>100 && $productPriceInput.value%10 === 0){
            return true
        }
        return false
    }

    //수량 예외처리
    function checkProductQuantityValid($productQuantityInput){
        if($productQuantityInput.value>0 && $productQuantityInput.value%1===0){
            return true
        }
        return false
    }

    //상품명 중복이 있는지
    function checkProductNameValid($productNameInput){
        console.log(document.querySelectorAll('.product-manage-name'))
        for(let product of GAME.PRODUCTS){
            if($productNameInput.value === product.name){
                return false
            }
        }
         return true
    }


    
export function checkProductValid($productNameInput, $productPriceInput, $productQuantityInput){
    //공백 예외처리
    if(!checkProducBlanktValid($productNameInput, $productPriceInput, $productQuantityInput)){
        alert(ERROR_MESSAGE.BLANK_ERROR)
        return false
    }
    //수량 예외처리
    else if(!checkProductQuantityValid($productQuantityInput)){
        alert(ERROR_MESSAGE.PRODUCT_QUANTITY_INPUT_ERROR)
        return false
    }
    //가격 예외처리
    else if(!checkProductPriceValid($productPriceInput)){
        alert(ERROR_MESSAGE.PRODUCT_PRICE_INPUT_ERROR)
        return false
    }
    //상품명 중복 확인
    else if(!checkProductNameValid($productNameInput)){
        alert(ERROR_MESSAGE.PRODUCT_NAME_DUPLICATE)
        return false
    }
    return true
}
