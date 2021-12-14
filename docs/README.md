<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>
> 상품 추가, 잔돈 충전, 금액 투입, 상품 구입, 잔돈 반환을 할 수 있는 자판기 프로그램입니다!

---
## 1️⃣ 구현기능
<br>

- 각 탭의 html template를 구현
- 각 탭 버튼을 눌러 해당 탭으로 넘어갈 수 있는 기능 구현
- 상품 관리 탭에서 상품을 추가할 수 있는 기능 구현
- 잔돈 충전 탭에서 충전금액을 입력받고 잔돈을 랜덤한 동전들로 충전하는 기능 구현
- 상품 구매 탭에서 충전금액을 입력받을 수 있는 기능 구현
- 상품 구매 탭에서 상품을 구매할 수 있는 기능 구현
- 상품 구매 탭에서 남은 돈은 가장 적은 수의 동전으로 반환받는 기능 구현

---
## 2️⃣ 구현할 기능 목록 작성
<br>

### TODO 공통 탭 만들기
- [X] 탭으로 이동할 버튼을 추가
- [X] 버튼을 클릭하면 해당 탭으로 이동하고 localStorage에서 값을 불러옴

### TODO 상품관리 탭 만들기
- [X] 상품 추가하기 form 만들기
    - [X] 상품명, 가격, 수량을 입력받기
    - [X] 추가버튼을 누르면 잘못된 값일 경우 alert로 표시 후 다시 입력하도록 하기
        - [X] 상품명,숫자,수량이 공백일 경우
        - [x] 상품이 이미 존재할 경우
        - [X] 가격이 숫자가 아닐 경우
        - [X] 가격이 100원 아래일 경우
        - [X] 가격이 10원으로 나누어 떨어지지 않을 경우
        - [X] 수량이 숫자가 아닌 경우
        - [X] 수량이 1이상의 숫자가 아닌 경우 
    - [X] 상품 추가하기에서 만든 상품을 localStorage에 저장하기
- [X] 상품 현황 form 만들기
    - [X] 상품 추가하기에서 만든 상품을 localStorage에서 값을 불러와 render해주기
    - [X] 다른 탭에서 넘어올 때 localStorage에서 값을 불러와 render해주기

### TODO 잔돈 충전 탭 (자판기 보유 동전)
- [X] 자판기 동전 충전하기 form 만들기
    - [X] 충전할 금액을 입력받기
    - [X] 입력받은 금액이 잘못된 값일 경우 alert로 표시 후 다시 입력하도록 하기
        - [X] 금액이 숫자가 아닌 경우
        - [X] 금액이 0이상의 숫자가 아닌 경우
    - [X] 올바른 값일 경우 보유금액에 해당 금액을 더하기 
    - [X] 보유금액을 localStorage에 저장하기
    - [X] 다른 탭에서 넘어올 때 localStorage에서 값을 불러와 render해주기
- [X] 자판기가 보유한 동전 form 만들기
    - [X] Random.pickNumberInList를 이용해서 동전 갯수를 금액에 맞게 무작위로 구하기
    - [X] 각 동전 갯수를 localStorage에 저장하기
    - [X] 다른 탭에서 넘어올 때 localStorage에서 값을 불러와 render해주기

#### TODO 상품 구매 탭
- [X] 금액 투입 form 만들기
    - [X] 투입할 금액을 입력받기
    - [X] 입력받은 금액이 잘못된 값일 경우 alert로 표시 후 다시 입력하도록 하기
        - [X] 금액이 숫자가 아닌 경우
        - [X] 금액이 0이상의 숫자가 아닌 경우
        - [X] 금액이 10으로 나누어 떨어지지 않을 경우
    - [X] 올바른 값일 경우 보유금액에 해당 금액을 더하기 
    - [X] 보유금액을 localStorage에 저장하기
    - [X] 다른 탭에서 넘어올 때 localStorage에서 값을 불러와 render해주기
- [X] 구매할 수 있는 상품 현황 form 만들기
    - [X] 상품 추가하기에서 만든 상품을 localStorage에서 불러와 render해주기
    - [X] 구매 버튼을 눌러 상품을 구매하고, 투입금액,수량 감소하기
- [X] 잔돈 form 만들기
    - [X] 자판기가 보유한 동전 form에서 localStorage에 저장한 동전 갯수를 불러온다.
    - [X] 500,100,50,10 순으로 잔돈을 초과하지 않은 한 최대한 많은 동전을 반환한다.
    - [X] 반환하고 남은 동전갯수를 localStorage에 저장한다.

---
## 3️⃣ 디렉토리 구조

<br>

```
│  .eslintrc.js
│  .gitignore
│  .npmrc
|  .prettierrc.js
│  cypress.json
│  index.html
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│
├─docs
│      README.md
│  
├─images
│      racingcar_icon.png
│      result.gif
│      result.jpg
│      test_result.png
│
├─src
│  ├─css
│  │    style.css
│  │
│  ├─js
│  │
│  |
│  ├─constant
│  │     constant.js
│  │     localstorage.js
│  │     string.js
│  │  
│  ├─core
│  │     event.js
│  │     manageChanges.js
│  │     manageCoins.js
│  │     manageInputAmount.js
│  │     manageMenu.js
│  │
│  ├─render
│  |     common.js
│  │     tabs.js
│  │
│  ├─store
│  │     store.js
│  │
│  ├─util
│  │     checkValue.js
│  │     dom.js
|  |
|  └─index.js
|
└─test
        app.spec.js
```
<br>