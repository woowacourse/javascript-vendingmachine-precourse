# 🥤 자판기
자판기 프로젝트는, 우아한테크코스 3차 프리코스 과제입니다. 
<br>자판기에 상품을 추가하고, 잔돈을 추가하면서 자판기를 관리하는 기능과, 사용자가 상품을 구매하고 잔돈을 반환받을 수 있는 프로그램입니다. 

## 🖥 실행 결과
[데모페이지](https://rladpwl0512.github.io/javascript-vendingmachine-precourse/)

![Dec-14-2021 22-09-47](https://user-images.githubusercontent.com/52344833/146004584-946e5f88-ac77-4118-b891-ffa5f074dad2.gif)

## 🎯 기능 구현 목록  
**1. navbar 및 초기 화면을 렌더링하는 기능 구현**
- [x] 탭 메뉴버튼 렌더링 한다.  
  - 상품 관리탭으로 이동하는 메뉴 버튼 id는 product-add-menu이다.
  - 잔돈 충전탭으로 이동하는 메뉴 버튼 id는 vending-machine-manage-menu이다.
  - 상품 구매 탭으로 이동하는 메뉴 버튼 id는 product-purchase-menu이다.
- [x] 요구사항에 나와있는 dom선택자를 참고하여, 아래 기능을 구현한다. 
  - [x] 상품 관리 버튼을 클릭하면, 상품 관리 관련 화면이 렌더링된다. 
  - [x] 잔돈 충전 버튼을 클릭하면, 잔돈 충전 관련 화면이 렌더링된다. 
  - [x] 상품 구매 버튼을 클릭하면, 상품 구매 관련 화면이 렌더링된다. 
<br>

**2. 상품 관리 탭 기능 구현**
- [x] 최초 상품 목록은 비워진 상태이다. 
- [x] 상품명, 가격, 수량을 입력한 후 추가하기를 클릭(엔터)한다.
- [x] 입력한 값이 유효한지 확인한다. 유효하지 않으면 alert창을 띄우고 다시 입력할 수 있도록 한다. 
  - [예외] 상품명: 공백인 경우 
  - [예외] 가격: 공백인 경우 
  - [예외] 가격: 상품가격이 100원 미만일 경우
  - [예외] 가격: 상품가격이 10원으로 나눠지지 않는 경우
  - [예외] 수량: 공백인 경우
  - [예외] 수량: 1 미만인 경우 
- [x] 입력한 값이 유효하면 상품 현황 테이블에 추가된다. 
- [x] input값을 reset한다. 
<br>

**3. 잔돈 충전 탭 기능 구현**
- [x] 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
- [x] 사용자는 충전할 금액을 입력한 후, 충전하기 버튼을 클릭(엔터)한다.     
- [x]  사용자가 입력한 값이 유효한지 확인한다. 유효하지 않으면 alert창을 띄우고 다시 입력할 수 있도록 한다. 
  - [예외] 공백인 경우
  - [예외] 상품가격이 10원 미만인 경우 
  - [예외] 상품가격이 10원으로 나눠지지 않는 경우
- [x] 사용자가 입력한 값이 유효하면, 보유 금액만큼의 동전이 무작위로 생성된다. (MissionUtils 라이브러리의 Random.pickNumberInList를 사용해 구한다)
  - 동전의 개수는 {개수}개 형식으로 나타낸다.
  - 자판기 보유 금액은 {금액}원 형식으로 나타낸다.
- [x] 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다. 
<br>

**4. 상품 구매 탭 기능 구현**
- [x] '상품 관리 탭'에서 추가한 상품 리스트를 불러온다. (localStorage에 있으면 불러온다.)

**4-1) 금액 투입 기능 구현**
- [x] 상품 구매 페이지에서 최초 충전 금액은 0원이다.
- [x] 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, 투입하기 버튼을 클릭(엔터)한다.
- [x] 사용자가 입력한 값이 유효한지 확인한다. 유효하지 않으면 alert창을 띄우고 다시 입력할 수 있도록 한다. 
  - [예외] 공백인 경우
  - [예외] 10원으로 나눠지지 않는 경우
- [x] 입력한 것이 유효한 값이라면, '투입한 금액: {투입한 금액}'으로 입력한 돈을 표기한다. 
- [x] 금액은 누적으로 투입할 수 있으며, '투입한 금액: {투입한 금액}'의 값에 더한다. 

**4-2) 상품을 구매하는 기능 구현**
- [x] 구매하기 버튼을 클릭하면, 현재 보유한 금액에서 상품을 구매할 수 있는지 확인하고 구매할 수 없으면, alert 창을 띄운다. 
  - [예외] 보유한 금액보다 상품 가격이 더 높은 경우 
- [x] 구매하기 버튼을 클릭하면, {수량-1}을 해준다. 
  - [x] localStorage를 함께 업데이트 시켜준다. (dataset을 활용한다.)
- [x] 구매하기 버튼을 클릭하면, {투입한 금액-구매한 상품가격}을 해준다. 

**4-3) 잔돈을 반환하는 기능 구현**
- [x] 상품 구매 페이지에서 최초 반환된 각 동전의 개수는 0개이다
- [x] 사용자는 반환하기 버튼을 클릭 한다. 
- [x] '잔돈 충전 탭'에서 충전한 동전의 개수 내에서, 잔돈을 받을 수 있다. 
  - 잔돈을 돌려줄 때는 현재 보유한 '최소 개수의 동전'으로 잔돈을 돌려준다.
  - 잔돈을 반환할 수 없는 경우, 잔돈으로 반환할 수 있는 금액만 반환한다.
- [x] 받은 잔돈만큼, 투입한 금액: {투입한 금액-잔돈}을 출력한다. 
- [x] 반환한 동전의 개수가 {개수}개 형식으로 나타난다. 


## ✅ 요구 사항 
- [x] 각 요소에 [다음과 같은](https://github.com/rladpwl0512/javascript-vendingmachine-precourse/tree/rladpwl0512) 선택자를 반드시 지정한다.
- [x] 잔돈을 무작위로 생성하는 기능은 MissionUtils 라이브러리의 Random.pickNumberInList를 사용해 구한다.
- [x] 스크립트 추가 외에 주어진 index.html파일은 수정할 수 없다.
- [x] 스타일(css)은 채점 요소가 아니다.
- [x] 모든 예외 발생 상황은 alert메서드를 이용하여 처리한다.
- [x] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다. (에어비앤비, nhn 채택)
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [x] 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [x] 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.
- [x] import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
- [x] 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [x] 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- [x] npm run test

## 🗂 디렉터리 구조 
```
.
├── LICENSE
├── README.md
├── cypress.json
├── docs
│   └── README.md
├── images
│   ├── beverage_icon.png
│   ├── test_result.png
│   ├── vendingmachine_coin.gif
│   ├── vendingmachine_inventory.gif
│   └── vendingmachine_purchase.gif
├── package-lock.json
├── package.json
├── .prettierrc
├── .eslintrc
├── index.html
├── src
│   ├── css
│   │   └── style.css
│   └── js
│       ├── index.js                     // 페이지에 접속하면 초기 화면을 구성하는 html, css을 렌더링 하고, 각 메뉴를 눌렀을 때 알맞은 화면 렌더링 및 해당 Controller로 이동한다. 
│       ├── controllers                  // models, views 사이를 연결하면서 이벤트를 관리하고, 프로그램이 돌아갈 수 있게 하는 역할
│       │   ├── HandleProductAdd.js      // 메뉴 ‘상품 관리’를 클릭했을 때 실행하는 로직
│       │   ├── HandleVendingMachine.js  // 메뉴 ‘잔돈 충전’을 클릭했을 때 실행하는 로직 
│       │   └── HandleProductPurchase.js // 메뉴 ‘상품 구매’를 클릭했을 때 실행하는 로직 
│       ├── models                       // 데이터를 관리하는 역할 (views에 접근하지 않음)
│       │   ├── productAddModel.js       // HandleProductAdd.js에서 호출하는 model
│       │   ├── vendingMachineModel.js   // HandleVendingMachine.js에서 호출하는 model
│       │   └── productPurchaseModel.js  // HandleProductPurchase.js에서 호출하는 model
│       ├── views                        // 화면을 관리하는 역할 (models에 접근하지 않음)
│       │   ├── productAddView.js        // HandleProductAdd.js에서 호출하는 view
│       │   ├── vendingMachineView.js    // HandleVendingMachine.js에서 호출하는 view
│       │   ├── productPurchaseView.js   // HandleProductPurchase.js에서 호출하는 view
│       │   ├── renderInitHTML.js        // 초기 화면을 구성하는 html 
│       │   ├── renderCSS.js             // html에 css를 적용하여 화면을 꾸며주는 로직 
│       │   └── alertMessage.js          // alert 창을 통해 에러 메시지를 출력하는 로직 
│       └── utils                        // 위에서 공통적으로 사용하는 것들을 모아놓은 폴더
│           ├── constants.js             // 상수 데이터를 관리하는 파일 
│           ├── dom.js                   // dom 요소를 가져오는 로직 
│           └── store.js                 // localStorage의 setItem, getItem을 실행할 수 있는 로직 
└── test
    └── app.spec.js
```
각 메뉴별로 controller, models, views 파일이 하나씩 존재합니다. 
<br>'상품 관리' 메뉴는 `HandleProductAdd.js`(controller), `productAddModel.js`(model), `productAddView.js`(view)이며 
<br>'잔돈 충전' 메뉴는 `HandleVendingMachine.js`(controller), `vendingMachineModel.js`(model), `vendingMachineView.js`(view)이며 
<br>'상품 구매' 메뉴는 `HandleProductPurchase.js`(controller), `productPurchaseModel.js`(model), `productPurchaseView.js`(view)입니다. 

