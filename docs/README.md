## 📋 구현할 기능 목록

### 1️⃣ 공통

- [x] ⚙️  localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다
- [x] ⚙️  다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다
  - [x] 탭(컴포넌트) 간 전환을 `display` 속성으로 관리 (`none`, `block`)

- [x] 🖨️  `상품 관리`, `잔돈 충전`, `상품 구매` 탭 메뉴를 보여준다

<hr/>

### 2️⃣ 상품 관리 탭

- **초기화**

- [x] 🖨️  `상품 관리` template html 작성

- [x] 🔍 localStorage의 `inventory`에 상품이 존재하는지 파악한다
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

- **초기화**
- [x] 🖨️  `잔돈 충전` template html 작성
- [x] 🔍  localStorage의 `vendingMachineCoins`에 보유 동전이 존재하는지 파악한다
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
  - [x] 💾  localStorage의 `vendingMachineCoins`에 금액 별 동전 개수를 저장한다
- **자판기가 보유한 동전 모듈**
- [x] 🖨️  자판기가 보유한 동전 금액별 개수 출력

<hr/>

### 4️⃣  **상품 구매 메뉴**

- **초기화**

- [x] 🖨️  `상품 구매` template html 작성

- [ ] 🔍  localStorage의 `vendingMachineCoins`에 보유 동전이 존재하는지 파악한다

- [ ] 🔍 localStorage의 `inventory`에 상품이 존재하는지 파악한다
  - [ ] 🖨️  구매할 수 있는 상품 현황 table에 row를 추가해서 표시
  
- [x] 🔍 localStorage의 `chargeToPurchaseProduct`에 투입한 금액이 존재하는지 파악한다
  - [x] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다
  
- **금액 투입 모듈**

- [x] ⌨️  투입할 금액 입력 요소에 충전할 금액을 입력한다
  - [x] 🚥  빈칸으로 제출 했는지 검사한다
  - [x] 🚥 숫자 입력만 허용한다 (특수문자 입력 금지)
  - [x] 🚥 10이상의 숫자만 허용한다
  - [x] 🚥 10의 배수 숫자만 허용한다
  
- [x] 🖱️ 금액 입력 후`투입하기` 버튼을 클릭할 수 있다
  - [x] 💾  localStorage의 `chargeToPurchaseProduct`에 투입한 금액을 저장한다
  - [x] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다
  - [x] ⚙️  금액은 누적으로 투입할 수 있다
  
- **구매할 수 있는 상품 현황 모듈**

- [x] 🖨️ 구매할 수 있는 상품 현황을 보여준다

- [x] 🖱️ 원하는 상품의 `구매하기` 버튼을 클릭할 수 있다
  - [x] 🚥  투입한 금액이 원하는 상품 가격 이상이어야 한다
  - [x] 🚥  수량이 0이하인 상품은 구매할 수 없다
  - [x] ⚙️  투입한 금액은 기존 투입한 금액에서 원하는 상품 가격을 차감한다
    - [x] 🖨️ 투입한 금액을 업데이트해서 보여준다
  - [x] ⚙️  원하는 상품의 수량을 -1 한다
    - [x] 🖨️ 업데이트된 수량을 보여준다
  
- **잔돈 계산 모듈**

- [ ] 🖱️ 잔돈을 받기위해 `반환하기` 버튼을 클릭할 수 있다
  - [x] 🚥  투입한 금액이 0 이상이어야 한다
  
  - [x] 🚥  반환할 수 있는 잔돈이 더이상 없는 경우
  
  - [x] 1. 투입 금액이 잔돈보다 많을 경우
    - [x] ⚙️  투입한 금액에서 반환한 금액의 총합을 차감한다
    - [x] 💾  localStorage의 `chargeToPurchaseProduct`에 투입한 금액을 저장한다
        - [x] 🖨️  자판기가 반환한 동전 금액별 개수 출력한다
    - [x] 💾  localStorage의 `vendingMachineCoins`의 금액 별 동전 개수를 차감 후 저장한다
    - [x] 🖨️  차감된 투입한 금액을 출력한다
    - [x] 🖨️ 갱신된 값으로 `잔돈 충전` 탭의 보유 금액과, 자판기가 보유한 동전 테이블을  출력한다
    
  - [ ] 2. 투입 금액이 잔돈보다 적을 경우
    - [x] ⚙️  잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다
    - [ ] ⚙️  투입한 금액에서 반환한 금액의 총합을 차감한다 (0으로 만든다)
    - [ ] 💾  localStorage의 `vendingMachineCoins`의 금액 별 동전 개수를 차감 후 저장한다
    - [ ] 💾  localStorage의 `chargeToPurchaseProduct`에 투입한 금액을 저장한다
    - [ ] 🖨️  투입한 금액: 옆에 `{금액}원` 형식으로 출력한다
    - [ ] 🖨️  자판기가 반환한 동전 금액별 개수 출력한다

<br/>

## **🤔 고민했던 부분**

### 1. 자판기 보유 금액 만큼 동전 무작위 생성하는 알고리즘

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

### 2. `vendingMachineCoins`를 가져와서 자판기 보유 금액을 계산하는 방법

> `vendingMachineCoins`는 `{"coin500":0,"coin100":0,"coin50":1,"coin10":5}`처럼 각 동전별 갯수를 저장합니다. 이 객체를 사용해서 `자판기 보유 금액` 을 구하는 함수를 작성해보았습니다.

```javascript
//utils.js
  calculateToCharge: string => {
    // 1. DB.load(string)로 동전별 갯수 객체를 불러옵니다.
    //   1-1. Object.entries로 객체를 key와 value의 쌍을 이루는 배열로 변화시킵니다.
    return Object.entries(DB.load(string))
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

### 3. 독특한 자판기 시스템

![image](https://user-images.githubusercontent.com/24728385/145353374-23caf044-59b9-427e-a141-b20bd8b1adb5.png)

실행 결과 예시로 주어진 [vendingmachine_purchase.gif](https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/vendingmachine_purchase.gif) 를 보면서 위와 같이 표현을 해보았습니다.

제가 생각한 시나리오는 3, 4번과 같이 '상품 구매를 하면 자판기의 잔고에 추가가 되어야 한다' 였습니다. 그래서 잔돈 반환을 하면 총 2950원 에서 사용자가 받아야 할 금액이 500원을 반환해야 한다고 생각했습니다.

집단지성의 힘을 빌리고자 지원자들이 모여있는 카톡방에서 질문을 했고 의견을 얻을 수 있었습니다.

1. "지폐로 넣을 수도 있어서 잔고 충전은 안된다고 저는 생각했어요"
2. "구매를 위해 넣은 돈으로는 동전을 안만든다고해서 잔돈은 최초 450원 이하로만 줄수 있을꺼에요"
3. "잔고는 잔돈 충전만으로 가능하고, 구매를 위해 넣은 돈은 잔고를 충전할 수 없다고 생각했습니다!"

위의 의견들을 종합해서 제가 내린 결론은 다음과 같습니다.

> 상품 구매시 결제된 금액은 자판기 보유 금액 charge에 영향을 주지 않는다.

<hr/>

### 4. 자판기의 잔돈 반환 알고리즘

> **그리디 알고리즘**(욕심쟁이 알고리즘, Greedy Algorithm)이란 "매 선택에서 **지금 이 순간 당장 최적인 답**을 선택하여 적합한 결과를 도출하자" 라는 모토를 가지는 [알고리즘](https://namu.wiki/w/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98) 설계 기법이다. - 출처 [#](https://namu.wiki/w/%EA%B7%B8%EB%A6%AC%EB%94%94%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

> 그리디 알고리즘으로 문제의 해법을 찾았을 때는 **그 해법의 정당성**을 검토해야 한다. 이 문제에서 그리디로 해결할 수 있는 이유는, **가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위를 종합해 다른 해가 나올 수 없기 때문이다**
> ex. 800원을 거슬러줘야하는데 동전이 500,400,10이원이면 문제가 생긴다. (500 + 100 + 100 + 100) << (400 + 400) - 출처 [#](https://velog.io/@jihyun2054/파이썬-이코테-그리디-알고리즘-거스름돈-예제)

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
