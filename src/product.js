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
}

export const ERROR_MESSAGE = {
    BLANK_ERROR : '공백을 입력할 수 없습니다.',
    PRODUCT_PRICE_INPUT_ERROR : '상품가격은 100보다 크고 10으로 나누어 떨어져야합니다',
    PRODUCT_QUANTITY_INPUT_ERROR : '상품수량은 0보다 크고 정수이어야합니다',
    PRODUCT_NAME_DUPLICATE : '이미 등록된 상품입니다'

}

export class CHARGE{
    // constructor(vendingMachineCoin500Quantity, vendingMachineCoin100Quantity, vendingMachineCoin50Quantity, vendingMachineCoin10Quantity){
    //     this.vendingMachineCoin500Quantity = vendingMachineCoin500Quantity
    //     this.vendingMachineCoin100Quantity = vendingMachineCoin100Quantity
    //     this.vendingMachineCoin50Quantity = vendingMachineCoin50Quantity
    //     this.vendingMachineCoin10Quantity = vendingMachineCoin10Quantity
    // }
    //     constructor(){
    //     this.vendingMachineCoin500Quantity = 0
    //     this.vendingMachineCoin100Quantity = 0
    //     this.vendingMachineCoin50Quantity = 0
    //     this.vendingMachineCoin10Quantity = 0
    // }
    constructor(){
        this.chargeArray = [0,0,0,0]
    }

    setChargeArray(i, randomNumber){
        this.chargeArray[i] += randomNumber
        //console.log(this.chargeArrayyy[i])
    }
    getName(){
        console.log(this.chargeArray)
    }

    // get(){
    //     console.log(this.vendingMachineCoin500Quantity)
    //     console.log(this.vendingMachineCoin100Quantity)
    //     console.log(this.vendingMachineCoin50Quantity)
    //     console.log(this.vendingMachineCoin10Quantity)
    // }
}