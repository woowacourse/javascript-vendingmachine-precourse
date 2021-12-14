# 기능 목록 

### 초기 렌더링 
- 세 개의 탭(상품 관리/ 잔돈 충전 / 상품구매)을 사용자에게 보여준다.
- 탭 메뉴를 클릭하여 사용자가 각 메뉴 페이지를 볼 수 있게 한다.

### 상품 관리 탭
상품 관리 탭은 보유하고 있는 상품을 추가하며, 최초 상품 목록은 비워진 상태이다.
1. 사용자가 상품을 추가 할 수 있다.
    - 상품명 / 가격 / 수량을 입력한다.
    - 상품 가격은 100원 부터 시작하여, 10원으로 나누어떨어져야 한다.
    - `예외사항: 상품 가격을 1원 단위로 입력하였을 경우 alert를 띄운다.`
    - 상품 추가후에는 Input value가 초기화 된다.
2. 사용자가 추가한 상품을 확인 할 수 있다.
3. 상품명이 중복되는 상품을 추가하였을 경우를 처리한다.
    - 상품명은 같고, 가격이 다를 경우 => `(confirm)이미 존재하는 상품입니다. 가격을 변경하시겠습니까?`
        - yes : 가격 변경 / 수량 추가
        - no : 종료
    - 상품명과 가격이 같을 경우 -> 수량 추가 

### 잔돈 충전 탭
자판기가 보유할 금액을 충전하며, 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
1. 사용자가 자판기 보유 금액을 충전할 수 있다.
    - 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, `충전하기` 버튼을 눌러 자판기 보유금액을 충전 할 수 있다.
    - `예외사항: 사용자가 소수를 입력할 경우 alert를 띄운다.`
    - `예외사항: 사용자가 10원 미만을 입력할 경우 alert를 띄운다.`
2. 충전된 자판기 보유 금액을 화면에 출력한다.
3. 보유하고 있는 동전의 개수를 화면에 출력한다.

### 상품 구매 탭
사용자가 금액을 투입할 수 있으며, 투입한 금액에 맞춰 상품을 구매하고, 남은 금액에 대해 잔돈을 반환한다.
상품 구매 페이지에서 최초 충전 금액은 0, 반환된 동전의 개수는 0으로 초기화한다.

1. 사용자가 금액을 투입할 수 있다.
    - 투입할 금액 입력 요소에 투입 금액을 입력한 후, 투입하기 버튼을 눌러 금액을 투입한다.
    - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
    - `예외사항: 1원 단위의 금액을 입력할 경우 alert를 띄운다.`
    - 자판기가 보유한 금액은 {금액}원 형식으로 나타낸다.
2. 사용자가 투입한 금액을 화면에 출력한다.
3. 사용자가 투입한 금액으로 구매할 수 있는 상품 목록을 볼 수 있다.
4. 사용자가 상품을 구입할 수 있다.
5. 사용자가 반환하기 버튼을 통해 잔돈을 반환 받을 수 있다.
6. 잔돈 반환 모듈을 작성한다.
    - 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
    - 지폐를 잔돈으로 반환하는 경우는 없다.
    - 잔돈을 반환 할 수 없는 경우, 잔돈으로 반환 할 수 있는 금액만 반환한다.
    - 동전의 개수를 나타내는 정보는 {개수}개 형식으로 나타낸다. 
- `예외사항 : 투입된 금액이 0인 경우, 잔돈을 반환하려 할 때 alert를 띄운다.`
- `예외사항 : 자판기에 잔돈이 없을 경우, alert를 띄운다.`

### 그 외
1. 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지된다.
2. 새로고침해도 가장 최근에 작업한 정보들이 유지된다.



# 파일 구조 
```
📦src
 ┣ 📂actions
 ┃ ┣ 📜changes.js
 ┃ ┣ 📜product.js
 ┃ ┗ 📜user.js
 ┣ 📂components
 ┃ ┣ 📂MachineManagementTab
 ┃ ┃ ┣ 📜ChargedAmount.js
 ┃ ┃ ┣ 📜CoinStatus.js
 ┃ ┃ ┣ 📜Form.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂ProductManagementTab
 ┃ ┃ ┣ 📜Form.js
 ┃ ┃ ┣ 📜ProductList.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂PurchaseTab
 ┃ ┃ ┣ 📜ChangesStatus.js
 ┃ ┃ ┣ 📜ChargedAmount.js
 ┃ ┃ ┣ 📜Form.js
 ┃ ┃ ┣ 📜PurchaseList.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜Header.js
 ┃ ┗ 📜Main.js
 ┣ 📂core
 ┃ ┣ 📂class
 ┃ ┃ ┗ 📜Product.js
 ┃ ┣ 📜Component.js
 ┃ ┣ 📜Storage.js
 ┃ ┗ 📜Store.js
 ┣ 📂storages
 ┃ ┗ 📜index.js
 ┣ 📂stores
 ┃ ┣ 📜ChangesStore.js
 ┃ ┣ 📜ProductStore.js
 ┃ ┗ 📜UserStore.js
 ┣ 📂templates
 ┃ ┣ 📜MachineManagement.js
 ┃ ┣ 📜ProductManagement.js
 ┃ ┗ 📜Purchase.js
 ┣ 📂utils
 ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📜coin.js
 ┃ ┃ ┗ 📜product.js
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜dom.js
 ┃ ┣ 📜general.js
 ┃ ┣ 📜initialStates.js
 ┃ ┣ 📜input.js
 ┃ ┗ 📜validations.js
 ┣ 📜App.js
 ┗ 📜index.js
```

<br/>
<br/>

# 컴포넌트

## Component - Store 옵저버
컴포넌트에서 Store에 등록된 전역상태를 사용할 때, 전역 상태가 변경되었을 경우 자동으로 컴포넌트를 리렌더링 하도록 구현

![](https://i.ibb.co/qFQfprr/IMG-1438.jpg)
 
- `getGlobalState` 메서드는 `Store.getState()` 를 사용한다.
- 컴포넌트 내부에서 `getGlobalState`를 사용하면, 해당 컴포넌트(의 UpdateComponent 메서드)가 Store의 옵저버로 등록이 되고, Store에 등록된 상태가 변경 될 때 마다 옵저버로 등록된 컴포넌트의 UpdateComponent 메서드를 실행하여 리렌더링한다.

<br/>

## 컴포넌트 구조 

![](https://i.ibb.co/wdcQkpj/IMG-1439.jpg)
- 전체 `App 컴포넌트` 내부의 `Header` 와 `Main` 으로 분리
- `Header 컴포넌트` 에서 `selectedTab` 상태를 변경함에 따라, 다른 `Main 컴포넌트`의 내부가 달라진다. 

### 상품 구매 탭 
![](https://i.ibb.co/xf96G9J/IMG-1442.jpg)
- `Form 컴포넌트` : 금액 입력을 받는다.
- `ChargedAmount 컴포넌트` : 전역 상태에 저장된 투입 금액을 화면에 출력한다.
- `PurchaseList 컴포넌트` : 전역 상태에 저장된 투입 금액과 상품에 따라 현재 사용자가 구매할 수 있는 상품을 화면에 출력한다.
- `ChangesStatus 컴포넌트`: `반환하기 버튼`을 통해 잔돈 반환을 처리하고, 반환된 동전 상태를 화면에 출력해준다.


### 상품 추가 탭 
![](https://i.ibb.co/vqxhHZB/IMG-1440.jpg)
- `Form 컴포넌트`: 추가될 상품 정보 입력을 받는다.
- `ProductList 컴포넌트`: 전역 상태에 저장된 상품 정보를 화면에 출력한다.


### 잔돈 충전 탭
![](https://i.ibb.co/PNrGRm2/IMG-1441.jpg)
- `Form 컴포넌트` : 충전될 잔돈 입력을 받는다.
- `ChargedAmount 컴포넌트` : 전역 상태에 저장된 잔돈 금액을 화면에 출력한다.
- `CoinStatus 컴포넌트` : 전역 상태에 저장된 동전 상태를 화면에 출력한다.

<br/>
<br/>

## 전역 상태 구조 

- 모든 초기 상태는 localStorage에서 가져오며, localStorage에 데이터가 없을 경우, 요구사항에 명시된 초기 값을 갖는다.

### `ChangeStore`
```json
changes: 0, 
coins : { 500:0, 100:0, 50:0, 10:0 }
```
- changes : 충전된 잔돈
- coins : 충전된 잔돈의 동전 상태

### `ProductStore`
```json
products: [] // Product 객체 배열 
```
- products: 등록된 상품 배열

### `UserStore`
```json
chargedMoney: 0,
coins: { 500:0, 100:0, 50:0, 10:0 }
```
- chargedMoney: 충전된 금액 
- coins: 반환된 잔돈의 동전 상태 
