# 자판기 구현(우테코 프리코스 미션3)

https://github.com/woowacourse/javascript-vendingmachine-precourse

## 1. 구현 목록

- [x] 최종 목표 : 반환되는 동전이 최소한이 되는 자판기를 구현한다.

### 0) 데이터 모델

- 상품 현황 목록: [변수명]productObj, [타입]Object
  - ex) { "콜라": {"가격": 1,500, "수량": 20}, "사이다": {"가격": 1,000, "수량": 10}}
- 자판기가 보유한 동전 목록: [변수명]coinObj, [타입]Object
  - ex) { "coin500": 0, "coin100": 4, "coin50": 1, "coin10": 0}
  - 충전금액이 주어지면 각 동전들의 개수 조합은 랜덤으로 정해진다.
  - 자판기가 보유한 금액은 해당 객체의 키(parseInt필요)와 값들을 곱한 값들의 합으로 한다.
- 투입한 금액 : [변수명]insertedMoney, [타입]Number
- 잔돈 목록: [변수명]changesObj, [타입]Object
  - 잔돈 총액: 투입한금액- 상품금액(구매한 각 상품들의 가격 곱하기 수량의 합)

### 1) 공통

- 상단에 탭메뉴가 존재한다. 각 탭에 따라 다음과 같은 규칙으로 적절한 기능을 수행한다.
  - `view.renderInApp(position, text)`
    - 탭 전환 `view.switchTab(tab)` `view.showTab(tab)` `view.hideTab()`
    - 이벤트 달기 `controller.addAllEventListener()`
- [x] 상품 관리탭은 자판기가 보유하고 있는 상품을 추가하는 기능을 수행한다.
- [x] 잔돈 충전탭은 자판기가 보유할 금액을 충전하는 기능을 수행한다.
- [x] 상품 구매탭은 사용자가 금액을 투입할 수 있으며, 투입한 금액에 맞춰 상품을 구매하고, 남은 금액에 대해서는 잔돈을 반환하는 기능을 수행한다.
- [x] 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- [x] localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.
  - `model.setLocalStorage(key, data)` `model.getLocalStorage(key)`
  - `controller.loadData()`
  - [x] 상품 관리탭에서 localStorage 사용
    - `controller.loadTab1Data()`
  - [x] 잔돈 충전탭에서 localStorage 사용
    - `controller.loadTab2Data()`
  - [x] 상품 구매탭에서 localStorage 사용
    - `controller.loadTab3Data()`
- DOM 선택자
  - [x] 상품 관리탭으로 이동하는 메뉴 버튼 id는 product-add-menu이다.
  - [x] 잔돈 충전탭으로 이동하는 메뉴 버튼 id 는 vending-machine-manage-menu이다.
  - [x] 상품 구매 탭으로 이동하는 메뉴 버튼 id는 product-purchase-menu이다.

### 2) 상품 관리 탭

- 상품 관리탭에서, 다음과 같은 규칙을 바탕으로 상품을 추가한다.
- [x] 최초 상품 목록은 비워진 상태이다.
- [x] 상품명, 가격, 수량을 입력해 상품을 추가할 수 있다.
  - 데이터 저장 : `modle._productObj`
  - `controller.addProduct()`
  - [x] 상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 한다.
    - [x] 조건 미충족시 alert 및 데이터 미 입력
    - `controller.checkPrice() `
    - `view.alertMessage() `
- [x] 사용자는 추가한 상품을 확인할 수 있다.
  - `controller.makeTab1Table(name, price, quantity) `
    - `view.addTableRow(table, data) `
- DOM 선택자
  - [x] 상품 추가 입력 폼의 상품명 입력 요소의 id는 product-name-input이다.
  - [x] 상품 추가 입력 폼의 상품 가격 입력 요소의 id는 product-price-input이다.
  - [x] 상품 추가 입력 폼의 수량 입력 요소의 id는 product-quantity-input이다.
  - [x] 상품 추가하기 버튼 요소의 id는 product-add-button이다.
  - [x] 추가한 각 상품 요소의 class명은 product-manage-item이며, 하위에 아래 요소들을 갖는다.
    - [x] 상품명에 해당하는 요소의 class명은 product-manage-name이다.
    - [x] 가격에 해당하는 요소의 class명은 product-manage-price이다.
    - [x] 수량에 해당하는 요소의 class명은 product-manage-quantity이다.

### 3) 잔돈 충전 탭 (자판기 보유 동전)

- 잔돈 충전 탭에서, 다음과 같은 규칙으로 자판기 보유 금액을 충전한다.
- [x] 잔돈 충전 탭에서 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
  - 데이터 저장
    - 보유 동전 조합:`model._coinObj`
    - 보유 금액:`model._chargedMoney`
- [x] 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, 충전하기 버튼을 눌러 자판기 보유 금액을 충전할 수 있다.
  - `controller.chargeMoney(e)`
  - `controller.makeTableOfTab2()`
  - [x] 자판기 보유 금액은 {금액}원 형식으로 나타낸다.
  - [x] 0원 미만 금액을 충전할 경우 alert 발생 및 이하 동작 미실행
- [x] 자판기 보유 금액만큼의 동전이 무작위로 생성된다.
  - `saveRandomCoin(money)`
    - `MissionUtils.Random.pickNumberInList`
    - `controller.saveCoins(coin)`
  - [x] 동전의 개수는 {개수}개 형식으로 나타낸다.
    - `controller.makeTableOfTab2()`
- [x] 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다.
- DOM 선택자
  - [x] 자판기가 보유할 금액을 충전할 요소의 id는 vending-machine-charge-input이다.
  - [x] 충전하기 버튼에 해당하는 요소의 id는 vending-machine-charge-button이다.
  - [x] 충전된 금액을 확인하는 요소의 id는 vending-machine-charge-amount 이다.
  - 보유한 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
    - [x] 500원: vending-machine-coin-500-quantity
    - [x] 100원: vending-machine-coin-100-quantity
    - [x] 50원: vending-machine-coin-50-quantity
    - [x] 10원: vending-machine-coin-10-quantity

### 4) 상품 구매 탭

- 상품 구매탭에서, 다음과 같은 규칙을 바탕으로 금액을 충전하고, 상품을 구매하며, 잔돈을 반환한다.

#### 4-1) 금액 충전

- [x] 상품 구매 페이지에서 최초 충전 금액은 0원이며, 반환된 각 동전의 개수는 0개이다.
- [x] 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, 투입하기버튼을 이용하여 금액을 투입한다.
  - `controller.insertMoney(e)`
  - [x] 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
    - `controller.checkInsertedMoney(money)`
  - [x] 자판기가 보유한 금액은 {금액}원 형식으로 나타낸다.
- [x] 금액은 누적으로 투입할 수 있다.
- DOM 선택자
  - [x] 투입 금액 입력 요소의 id는 charge-input이다.
  - [x] 투입하기 버튼 요소의 id는 charge-button이다.
  - [x] 투입한 금액을 확인하는 요소의 id는 charge-amount이다.

#### 4-2) 상품 구매

- [x] 구매하기 버튼을 누르면 해당 제품의 수량이 1개씩 감소하고, 투입한 금액에서도 제품 가격만큼 감소한다.
  - `controller.makeBuyingTableOfTab3()`
    - `controller.purchaseProduct(e)`
    - `controller.setInsertedMoney()`
    - [x] 제품 매진 시 추가 구입할 수 없도록 제한 추가
- DOM 선택자
  - [x] 각 상품 요소의 class명은 product-purchase-item이고, 하위에 아래 요소들을 갖는다.
    - [x] 구매 버튼에 해당하는 요소의 class명은 purchase-button이다.
    - [x] 상품명에 해당하는 요소의 class명은 product-purchase-name이다.
    - [x] 가격에 해당하는 요소의 class명은 product-purchase-price이다.
    - [x] 수량에 해당하는 요소의 class명은 product-purchase-quantity이다.
    - [x] 상품명은 dataset 속성을 사용하고 data-product-name 형식으로 저장한다.
    - [x] 가격은 dataset 속성을 사용하고 data-product-price 형식으로 저장한다.
    - [x] 수량은 dataset 속성을 사용하고 data-product-quantity 형식으로 저장한다.

#### 4-3) 잔돈 반환

- 상품 구매 탭에서 잔돈 반환 시 다음과 같은 규칙을 통해 잔돈을 반환한다.
- [x] 사용자는 반환하기 버튼을 통해 잔돈을 반환 받을 수 있다.
  - `controller.giveChanges(e)`
- [x] 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
- [x] 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
- [x] 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
  - `controller.makeChangesTableOfTab3(chagnes)`
- [x] 동전의 개수를 나타내는 정보는 {개수}개 형식으로 나타낸다.
- DOM 선택자
  - [x] 반환하기 버튼 요소의 id는 coin-return-button이다.
  - 반환된 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
    - [x] 500원: coin-500-quantity
    - [x] 100원: coin-100-quantity
    - [x] 50원: coin-50-quantity
    - [x] 10원: coin-10-quantity

### 2. 리팩토링

#### 1) 값을 하드 코딩하지 마라

- [x] 하드 코딩된 문자열, 숫자 등의 값을 상수로 만들고 역할에 맞는 이름을 부여한다.

#### 2) 발생할 수 있는 예외케이스에 대해 고민한다

#### 3) Boolean을 return 하는 경우 간결하게 한다

#### 4) 불필요한 변수를 줄이기 위해 노력한다

- [x] 불필요 변수 제거

#### 5) 비즈니스 로직과 UI 로직을 분리해라

#### 6) 함수(메서드) 라인
- [x] 함수(메서드) 15라인 이하로 리팩토링
