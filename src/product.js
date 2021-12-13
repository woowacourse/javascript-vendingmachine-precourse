export class PRODUCT {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName(){
        console.log(this.name)
        console.log(this.price)
        console.log(this.quantity)
    }

    purchase(){
        this.quantity -= 1
        console.log(this.quantity)
    }
}

export const ERROR_MESSAGE = {
    BLANK_ERROR : '공백을 입력할 수 없습니다.',
    PRODUCT_PRICE_INPUT_ERROR : '상품가격은 100보다 크고 10으로 나누어 떨어져야합니다',
    PRODUCT_QUANTITY_INPUT_ERROR : '상품수량은 0보다 크고 정수이어야합니다',
    PRODUCT_NAME_DUPLICATE : '이미 등록된 상품입니다',
    VENDING_MACHINE_CHARGE_INPUT_NUMBER_ERROR : '잔돈은 0보다 크고 10으로 나누어떨어져야합니다.'

}

export class VENDING_MACHINE_CHARGE{
    constructor(){
        this.chargeArray = [0,0,0,0]
        this.chargeTotal = 0
        this.coin = [500,100,50,10]
    }

    setChargeArray(i, randomNumber){
        this.chargeArray[i] += randomNumber
    }
    useChargeArray(i, coinAmount){
        console.log('use'+' '+this.coin[i]+' '+ coinAmount)
        this.chargeArray[i] -= Number(coinAmount)
    }
    setChargeTotal(newCharge){
        this.chargeTotal += Number(newCharge)
    }
    useChargeTotal(price){
        this.chargeTotal -= price
    }
    getName(){
        console.log(this.chargeArray)
    }

}

export class CUSTOMER_CHARGE{
    constructor(){
        this.customerChargeTotal = 0
        this.customerChargeArray = [0,0,0,0]
    }

    setCustomerChargeTotal(newCustomerCharge){
        this.customerChargeTotal += Number(newCustomerCharge)
    }

    purchase(price){
        this.customerChargeTotal -= Number(price)
    }

    setCustomerChargeArray(i, coinAmount){
        this.customerChargeArray[i] += Number(coinAmount)
    }
}

export const GAME = {
    COIN_ARRAY : [500, 100, 50, 10],
    VENDING_MACHINE_CHARGE_ARRAY : [0,0,0,0],
    VENDING_MACHINE_CHARGE_TOTAL : 0,
    CUSTOMER_CHARGE_ARRAY : [0,0,0,0],
    CUSTOMER_CHARGE_TOTAL : 0,
    PRODUCTS : []
}
