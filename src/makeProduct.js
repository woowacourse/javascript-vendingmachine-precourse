import { PRODUCT, GAME } from './product.js'

export function makeProduct($productNameInputValue, $productPriceInputValue, $productQuantityInputValue){
    //클래스 생성
    let product = $productNameInputValue
    product = new PRODUCT($productNameInputValue, $productPriceInputValue, $productQuantityInputValue)
    
    GAME.PRODUCTS.push(product)

    console.log(GAME.PRODUCTS)
    console.log(GAME.PRODUCTS[0].quantity)

    for(let i in GAME.PRODUCTS){
        if(GAME.PRODUCTS[i].quantity === 0){
            GAME.PRODUCTS.splice(i,1)
        }
    }

    console.log(GAME.PRODUCTS)
}
