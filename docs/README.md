## 📋 구현할 기능 목록

### 1️⃣ 공통

- [x] ⚙️  localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다
  - [x] 상품을 정보를 관리하는 `inventory`를 생성한다
  - [x] 자판기가 보유한 동전을 관리하는 `coin`를 생성한다
    - [x] `{ coin500: 0, coin100: 0, coin50: 0, coin10: 0 }`으로 초기화 한다
  - [x] 자판기에 투입한 금액을 관리하는 `charge`를 생성한다
    - [x] `0`으로 초기화 한다
  
- [x] ⚙️  다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다
  - [x] 탭(컴포넌트) 간 전환을 `display` 속성으로 관리 (`none`, `block`)
- [x] 🖨️  `상품 관리`, `잔돈 충전`, `상품 구매` 탭 메뉴를 보여준다

<hr/>

### 2️⃣ 상품 관리 탭

> 자판기가 보유하고 있는 **상품을 추가**하는 기능을 수행한다.

![1](https://user-images.githubusercontent.com/24728385/145737618-d6d7a4f7-e805-47d4-9e83-2264dfceaa6f.gif)

- **초기화**

- [x] 🖨️  `상품 관리` template html 작성

- [x] 🖨️  상품 현황에 table에 row를 추가해서 표시한다
- **상품 추가하기 모듈**

- [x] ⌨️ 상품의 `상품명` 을 입력 할 수 있다
  - [x] 🚥  빈칸 제출을 검사한다
  - [x] 🚥  공백 입력을 검사한다
  - [x] 🚥  중복 입력 검사

- [x] ⌨️  상품의 `가격` 을 입력 할 수 있다
  - [x] 🚥  빈칸으로 제출 했는지 검사한다
  - [x] 🚥 숫자 입력만 허용한다 (특수문자 입력 금지)
  - [x] 🚥 100이상의 숫자만 허용한다
  - [x] 🚥 10의 배수 숫자만 허용한다

- [x] ⌨️  상품의 `수량`을 입력 할 수 있다
  - [x] 🚥  빈칸으로 제출 했는지 검사한다
  - [x] 🚥 숫자 입력만 허용한다 (특수문자 입력 금지)
  - [x] 🚥 양의 정수 입력만 허용한다 (0 입력 금지)

- [x] 🖱️ 상품 정보 입력 후 `추가하기` 버튼을 클릭할 수 있다
  - [x] 💾  localStorage의 `inventory`에 상품을 저장한다

- **상품 현황 모듈**

- [x] 🖨️  상품 현황 table에 row를 추가해서 `inventory`를 표시한다

<hr/>

### 3️⃣ **잔돈 충전 탭 (자판기 보유 동전)**

> **자판기가 보유할 금액을 충전**하는 기능을 수행한다.

![2](https://user-images.githubusercontent.com/24728385/145737644-b3cbd7ce-edca-4947-ba10-49685ebcd256.gif)

- **초기화**
- [x] 🖨️  `잔돈 충전` template html 작성
- [x] 🖨️  보유 금액은 보유한 동전의 합산으로 출력한다
  - [x] 보유 금액은 `{금액}원` 형식으로 나타낸다
- [x] 🖨️  자판기가 보유한 동전 table에 출력한다
  - [x] 동전의 개수는 `{개수}개` 형식으로 나타낸다
- **자판기 동전 충전 모듈**
- [x] ⌨️  잔돈 충전 입력 요소에 충전할 금액을 입력한다
  - [x] 🚥  빈칸으로 제출 했는지 검사한다
  - [x] 🚥 숫자 입력만 허용한다 (특수문자 입력 금지)
  - [x] 🚥 10이상의 숫자만 허용한다
  - [x] 🚥 10의 배수 숫자만 허용한다
- [x] 🖱️ 금액 입력 후`충전하기` 버튼을 클릭할 수 있다
  - [x] ⚙️  자판기가 보유할 금액 만큼의 동전이 무작위로 생성된다
  - [x] 🖨️  보유 금액은 보유한 동전의 합산으로 출력한다
    - [x] 보유 금액은 `{금액}원` 형식으로 나타낸다
  - [x] 💾  localStorage의 `coin`에 금액 별 동전 개수를 저장한다
- **자판기가 보유한 동전 모듈**
- [x] 🖨️  자판기가 보유한 동전 금액별 개수 출력

<hr/>

### 4️⃣  **상품 구매 메뉴**

> 사용자가 **금액을 투입**할 수 있으며, 투입한 금액에 맞춰 **상품을 구매**하고, 남은 금액에 대해서는 **잔돈을 반환**하는 기능을 수행한다.

![3](https://user-images.githubusercontent.com/24728385/145737681-046549a3-3ea1-4914-8daa-2411c3b7f7b8.gif)

- **초기화**

- [x] 🖨️  `상품 구매` template html 작성

  - [x] 🖨️  구매할 수 있는 상품 현황 table에 row를 추가해서 표시

  - [x] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다

- **금액 투입 모듈**

- [x] ⌨️  투입할 금액 입력 요소에 충전할 금액을 입력한다
  - [x] 🚥  빈칸으로 제출 했는지 검사한다
  - [x] 🚥 숫자 입력만 허용한다 (특수문자 입력 금지)
  - [x] 🚥 10이상의 숫자만 허용한다
  - [x] 🚥 10의 배수 숫자만 허용한다
  
- [x] 🖱️ 금액 입력 후`투입하기` 버튼을 클릭할 수 있다
  - [x] 💾  localStorage의 `charge`에 투입한 금액을 저장한다
  - [x] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다
  - [x] ⚙️  금액은 누적으로 투입할 수 있다
  
- **구매할 수 있는 상품 현황 모듈**

- [x] 🖨️ 구매할 수 있는 상품 현황을 보여준다

- [x] 🖱️ 원하는 상품의 `구매하기` 버튼을 클릭할 수 있다
  - [x] 🚥  투입한 금액이 원하는 상품 가격 이상이어야 한다
  - [x] 🚥  수량이 0이하인 상품은 구매할 수 없다
  - [x] ⚙️  투입한 금액은 기존 투입한 금액에서 원하는 상품 가격을 차감한다
    - [x] 💾  localStorage의 `charge`에 투입한 금액을 저장한다
    - [x] 🖨️ 투입한 금액을 업데이트해서 보여준다
  - [x] ⚙️  원하는 상품의 수량을 -1 한다
    - [x] 🖨️ 업데이트된 수량을 보여준다
  
- **잔돈 계산 모듈**

- [x] 🖱️ 잔돈을 받기위해 `반환하기` 버튼을 클릭할 수 있다
  - [x] 🚥  투입한 금액이 0 이상이어야 한다
  - [x] 🚥  반환할 수 있는 잔돈이 더이상 없는 경우
  - [x] ⚙️  투입한 금액에서 반환한 금액의 총합을 차감한다
    - [x] 💾  localStorage의 `charge`에 투입한 금액을 저장한다
    - [x] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다
  - [x] ⚙️  잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다
    - [x] 💾  localStorage의 `coin`의 금액 별 동전 개수를 차감 후 저장한다
    - [x] 🖨️  자판기가 반환한 동전 금액별 개수 출력한다

<br/>

## 🗂 프로그램 구조

```javascript
📦src
 ┣ 📂model
 ┃ ┗ 📜database.js			   // localStorage의 데이터를 관리하는 Model
 ┣ 📂views
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜ChargeForm.js		 // 자판기 보유 금액, 투입한 금액 관련 Component
 ┃ ┃ ┣ 📜CoinTable.js			 // 자판기 보유 동전, 반환되는 동전 관련 Component
 ┃ ┃ ┗ 📜ProductTable.js	 // 상품 현황, 구매할 수 있는 상품 현황 관련 Component
 ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜templates.js			 // 전체적인 html 뼈대를 구성하는 template
 ┃ ┣ 📜View.js						 // 컴포넌트와 템플릿을 호출하는 View
 ┣ 📂controllers
 ┃ ┣ 📂managers
 ┃ ┃ ┣ 📜ProductAddManager.js           // 상품 관리 비즈니스 로직을 담당하는 class
 ┃ ┃ ┣ 📜ProductPurchaseManager.js      // 잔돈 충전 비즈니스 로직을 담당하는 class
 ┃ ┃ ┗ 📜VendingMachineChargeManager.js // 상품 구매 비즈니스 로직을 담당하는 class
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜calculateReturnCoins.js    // 투입한 금액을 바탕으로 동전을 반환하는 function
 ┃ ┃ ┣ 📜convertChargeIntoCoin.js   // 금액을 입력하면 무작위로 동전을 생성하는 function
 ┃ ┃ ┗ 📜getAllPurchaseButton.js    // 구매 버튼의 활성화와 로직을 담당하는 function
 ┃ ┗ 📜Controller.js			  				// 탭 메뉴 버튼과 managers를 활성화 하는 Controller
 ┣ 📂constants
 ┃ ┣ 📜constants.js				// 정규식, localStorage, 단어, 숫자 관련 상수 모음
 ┃ ┣ 📜errors.js					// 예외처리에서 발생하는 오류메시지 관련 상수 모음
 ┃ ┗ 📜selectors.js				// html 선택자 관련 상수 모음
 ┣ 📂utils
 ┃ ┣ 📜DOMUtils.js				// DOM을 조작하는 function 모음
 ┃ ┣ 📜utils.js						// Boolean, 문자열 조작, 데이터 계산하는 function 모음
 ┃ ┗ 📜validators.js			// 각종 예외처리 들을 담당하는 function 모음
 ┗ 📜index.js				      // controller를 호출
```

<br/>

## **🤔 고민했던 부분**

### 1. 규모있는 프로젝트의 효율적인 설계
> 실제 설계에 사용한 Flow chart는 [여기](https://app.diagrams.net/#G1iQTbCXEIGvmoeMjggHDP-SqLe-xfz2kv)에서 확인 할 수 있습니다. (실제 구현 내용과 차이가 있습니다.)

![image](https://user-images.githubusercontent.com/24728385/145797064-45980ca0-e68e-4a80-a0cb-92fa0f2305cf.png)

3주차 과제를 처음 마주했을때 `기능 요구 사항`이 1, 2주차 과제에 비해서 많다고 생각했습니다. 개발이 물론 중요하지만 그 전에 설계를 잘해야 겠다는 생각을 했습니다. 진행방식을 따라서 기능 목록을 만들고 한 chapter의 정리가 끝나면 [Draw.io](https://app.diagrams.net/)를 사용해서 `flow chart`를 그렸습니다. **설계 하는 시간에만 하루를 과감히 투자하였습니다.**  개발 과정에 꼭 필요한 중요 로직을 설계하면서 구체화 하였습니다. 개발을 진행하면서 기능목록과 동시에 `flow chart`를 볼 수 있어서  기능목록을 작성할때는 생각하지 못했던 부분을  `flow chart`를 그리면서 알게되고, 개발을 진행하면서 설계 과정에서 생각하지 못한 부분을 찾아낼 수 있었습니다. 이렇게 요구사항에 대해서 깊이 파악할 수 있었고 **제가 생각할 수 있는 최선의 코드를 작성할 수 있었습니다.** 앞으로도 규모가 있는 프로젝트를 진행하게된다면 필수적으로 설계를 진행 할 예정입니다.



### 2. 컴포넌트의 재사용 with `Web Component`

![image](https://user-images.githubusercontent.com/24728385/145716847-82443e05-67c8-4a1b-b6d3-e0fac231108c.png)

마크업을 하면서 3개의 컴포넌트가 중복으로 사용된다는 것을 알았습니다. 코드의 중복을 줄이고자 순수 Vanilla JS로만 구현할 수 있는 컴포넌트 생성하는 법을 검색하였고, 리액트 뷰 처럼 **컴포넌트를 재활용 할 수 있는 [`web component`](https://developer.mozilla.org/ko/docs/Web/Web_Components) 를 알게되었습니다.**  제가 알게된 `web component`의 장점은 사용자 인터페이스에서 원하는대로 사용할 수있는 사용자 정의 요소 및 해당 동작을 정의 할 수있는 `Custom elements` 입니다. `Custom elements`를 사용해서 위의 이미지와 같이 중복되는 요소들을 찾아서 `component`화 하였고 **중복되는 html 코드들을 효율적으로 줄일 수 있었습니다.** 

```html
<!-- Before -->
<table border="1">
  <thead>
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>500원</td>
      <td id="coin-500-quantity"></td>
    </tr>
    <tr>
      <td>100원</td>
      <td id="coin-100-quantity"></td>
    </tr>
    <tr>
      <td>50원</td>
      <td id="coin-50-quantity"></td>
    </tr>
    <tr>
      <td>10원</td>
      <td id="coin-10-quantity"></td>
    </tr>
  </tbody>
</table>

<!-- After -->
<coin-table 
  coin500id="coin-500-quantity"
  coin100id="coin-100-quantity"
  coin50id="coin-50-quantity"
  coin10id="coin-10-quantity"
></coin-table>
```



<hr/>

### 2. `dataset` 속성을 활용하는 법

제품을 구매하기 위해서 `구매하기` 버튼을 누르면 제품의 정보를 얻어올 수 있어야 합니다. 
프로그래밍 요구 사항에 명시된 `dataset`속성을 사용해서 다음과 같이 구현하였습니다.

```javascript
//utils.js 

addPurchaseButtonEvent: element => {
  // 1. 제품의 구매하기 버튼을 누릅니다.
  element.addEventListener('click', e => {
    e.preventDefault();
		
    // 2. 클릭된 버튼을 감싸고있는 <td> 태그의 형제들을 찾아 
    //    getProductInformation함수로 호출합니다.
    const data = utils.getProductInformation(e.path[2].children);

    // ... 중략 ...
  });
},

getProductInformation: element => {
  // 3. <td> 태그들이 담겨 있는 배열을 구조 분해하여 변수에 할당합니다.
  const [name, price, quantity] = Array.from(element);

  return {
    // 4. dataset을 활용하여 각각의 정보를 가져오고 객체로 만들어 반환합니다.
    name: name.dataset.productName,
    price: price.dataset.productPrice,
    quantity: quantity.dataset.productQuantity,
  };
},
```
<hr/>
### 3. 자판기 보유 금액 만큼 동전 무작위 생성하는 알고리즘

> 충전하고 싶은 금액을 입력하면 `Random.pickNumberInList` 을 사용해서 무작위로 동전을 뽑습니다. 이때 충전할 금액이 0이 될때까지 다음 과정을 수행합니다.

- 금액이 500원 이상일때
  - 500, 100, 50, 10 원중 하나를 골라 해당 금액의 개수 +1
  - 충전할 금액 -= 해당 금액
- 금액이 100원 이상일때
  - 100, 50, 10 원 중 하나를 골라 해당 금액의 개수 +1
  - 충전할 금액 -= 해당 금액
- 금액이 50원 이상일때
  - 50, 10 원 중 하나를 골라 해당 금액의 개수 +1
  - 충전할 금액 -= 해당 금액
- 금액이 10원 이상일때
  - 10원을 골라 해당 금액의 개수 +1
  - 충전할 금액 -= 해당 금액

<hr/>

### 4. 자판기 보유 금액을 계산하는 방법

`coin`는 `{"coin500":0,"coin100":0,"coin50":1,"coin10":5}`처럼 각 동전별 갯수를 저장합니다. 이 객체를 사용해서 `자판기 보유 금액` 을 구하는 함수를 작성해보았습니다.

```javascript
//utils.js

calculateToCharge: object => {
  // 1. DB.load(string)로 동전별 갯수 object를 불러옵니다.
  //   1-1. Object.entries로 객체를 key와 value의 쌍을 이루는 배열로 변화시킵니다.
  return Object.entries(object)
  // 2. 다음의 과정으로 배열을 변화 시킵니다.
    .map(array => {
    // 3. 배열에 담긴 각 배열을 코인의 종류와 갯수로 저장합니다.
    const [coinType, quantity] = array;
    // 4. 코인의 종류를 정규식을 사용해서 숫자만 추출합니다. (ex. coin500 -> 500)
    //   4-1. 추출한 숫자와 갯수를 곱해줍니다.
    return coinType.replace(REGEX.HAS_NUMBER, '') * quantity;
  })
  // 5. 배열에 담긴 모든 숫자를 합산합니다.
    .reduce((previous, current) => previous + current);
},
```

<hr/>

### 5. 자판기의 잔돈 반환 알고리즘

> **그리디 알고리즘**(욕심쟁이 알고리즘, Greedy Algorithm)이란 "매 선택에서 **지금 이 순간 당장 최적인 답**을 선택하여 적합한 결과를 도출하자" 라는 모토를 가지는 [알고리즘](https://namu.wiki/w/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98) 설계 기법이다. - 출처 [#](https://namu.wiki/w/%EA%B7%B8%EB%A6%AC%EB%94%94%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

기능요구 사항에 명시되어 있는 '잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.'를 그리디 알고리즘을 사용해서 구현해보았습니다. 

```javascript
// calculateReturnCoins.js

// 제품 구매를 위해 투입한 금액을 불러옵니다.
const charge = DB.load('charge');  
// 자판기가 보유한 동전을 불러옵니다.
const wallet = DB.load('coin'); 
// 반환될 동전을 저장해주는 객체를 생성합니다.
const emptyWallet = { coin500: 0, coin100: 0, coin50: 0, coin10: 0 }; 

const useGreedyArgorithm = (charge, wallet, emptyWallet) => {
  const tryCaseByCoinType = coinType => {
    // 2. 투입한 금액이 선택한 동전보다 크고 선택한 동전을 자판기가 보유하고 있으면
    while (charge >= coinType && wallet['coin' + coinType] > 0) {
      // 3. 자판기가 보유한 선택한 동전의 개수를 -1 합니다.
      wallet['coin' + coinType] -= 1;
      // 4. 반환될 동전을 저장해주는 객체의 선택한 동전 개수를 +1 합니다.
      emptyWallet['coin' + coinType] += 1;
      // 5. 투입한 금액에서 선택한 동전 금액만큼 차감합니다.
      charge -= coinType;
    }
  };

  // 1. 500, 100, 50, 10의 순서로 tryCaseByCoinType를 시도합니다.
  [500, 100, 50, 10].forEach(coinType => tryCaseByCoinType(coinType));

  // 6. 2번의 조건을 모두 통과하면 차감이 완료된 자판기가 보유한 동전 객체와 
  //    반환될 동전을 저장해주는 객체를 반환합니다.
  return [wallet, emptyWallet];
};
```

<br/>

## ✅ 프로그래밍 요구사항

### **DOM 선택자**

각 요소에 아래와 같은 선택자를 반드시 지정한다.

**탭 메뉴 버튼**

- [x] `상품 관리`탭으로 이동하는 메뉴 버튼 id는 `product-add-menu`이다.
- [x] `잔돈 충전`탭으로 이동하는 메뉴 버튼 id는 `vending-machine-manage-menu`이다.
- [x] `상품 구매` 탭으로 이동하는 메뉴 버튼 id는 `product-purchase-menu`이다.


**상품 관리(추가) 메뉴**

- [x] 상품 추가 입력 폼의 상품명 입력 요소의 id는 `product-name-input`이다.
- [x] 상품 추가 입력 폼의 상품 가격 입력 요소의 id는 `product-price-input`이다.
- [x] 상품 추가 입력 폼의 수량 입력 요소의 id는 `product-quantity-input`이다.
- [x] 상품 `추가하기` 버튼 요소의 id는 `product-add-button`이다.
- [x] 추가한 각 상품 요소의 class명은 `product-manage-item`이며, 하위에 아래 요소들을 갖는다.
  - [x] 상품명에 해당하는 요소의 class명은 `product-manage-name`이다.
  - [x] 가격에 해당하는 요소의 class명은 `product-manage-price`이다.
  - [x] 수량에 해당하는 요소의 class명은 `product-manage-quantity`이다.

**잔돈 충전 (자판기 보유 동전) 메뉴**

- [x] 자판기가 보유할 금액을 충전할 요소의 id는 `vending-machine-charge-input`이다.
- [x] `충전하기` 버튼에 해당하는 요소의 id는 `vending-machine-charge-button`이다.
- [x] 충전된 금액을 확인하는 요소의 id는 `vending-machine-charge-amount` 이다.
- [x] 보유한 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - [x] 500원: `vending-machine-coin-500-quantity`
  - [x] 100원: `vending-machine-coin-100-quantity`
  - [x] 50원: `vending-machine-coin-50-quantity`
  - [x] 10원: `vending-machine-coin-10-quantity`

**상품 구매 메뉴**

- [x] 투입 금액 입력 요소의 id는 `charge-input`이다.
- [x] 투입하기 버튼 요소의 id는 `charge-button`이다.
- [x] 투입한 금액을 확인하는 요소의 id는 `charge-amount`이다.
- [x] 반환하기 버튼 요소의 id는 `coin-return-button`이다.
- [x] 반환된 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - [x] 500원: `coin-500-quantity`
  - [x] 100원: `coin-100-quantity`
  - [x] 50원: `coin-50-quantity`
  - [x] 10원: `coin-10-quantity`
- [x] 각 상품 요소의 class명은 `product-purchase-item`이고, 하위에 아래 요소들을 갖는다.
  - [x] 구매 버튼에 해당하는 요소의 class명은 `purchase-button`이다.
  - [x] 상품명에 해당하는 요소의 class명은 `product-purchase-name`이다.
  - [x] 가격에 해당하는 요소의 class명은 `product-purchase-price`이다.
  - [x] 수량에 해당하는 요소의 class명은 `product-purchase-quantity`이다.
  - [x] 상품명은 `dataset` 속성을 사용하고 `data-product-name` 형식으로 저장한다.
  - [x] 가격은 `dataset` 속성을 사용하고 `data-product-price` 형식으로 저장한다.
  - [x] 수량은 `dataset` 속성을 사용하고 `data-product-quantity` 형식으로 저장한다.

<hr/>

### **라이브러리**

- 잔돈을 무작위로 생성하는 기능은 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInList`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

<hr/>

### **공통 요구사항**

- 스크립트 추가 외에 주어진 `index.html`파일은 수정할 수 없다.
  - 스타일(css)은 채점 요소가 아니다.
- 모든 예외 발생 상황은 `alert`메서드를 이용하여 처리한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다.
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com/)
  - [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
