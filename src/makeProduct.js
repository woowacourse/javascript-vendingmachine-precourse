import { PRODUCT } from './product.js'

    let PRODUCTS = []
export function makeProduct($productNameInputValue, $productPriceInputValue, $productQuantityInputValue){
    //클래스 생성

    $productNameInputValue = new PRODUCT($productNameInputValue, $productPriceInputValue, $productQuantityInputValue)
    
    PRODUCTS.push($productNameInputValue)
    console.log(PRODUCTS)
    
    return PRODUCTS
}
