# 자판기

---

- 우아한테크코스 웹 프론트엔드 프리코스 3주 차 미션🥤
- 자판기 시스템을 구현합니다!
- 이 문서는 '프로젝트 구조' 및 '조건에 따른 기능 구현' 내용을 담고있습니다.

---

## 프로젝트 구조
.  
├── index.html  
├── assets  
│　　└── index.css  
└── src  
　　├── index.js                             // 시작점  
　　├── app.js                               // 유저가 선택한 메뉴를 생성함  
　　├── components                           // 메뉴들을 컴포넌트화  
　　│　　├── header.js                       // 유저가 메뉴를 선택할 수 있는 인터페이스 제공  
　　│　　├── product-add  
　　│　　│　　├── index.js                   // 상품관리 메뉴 컴포넌트  
　　│　　│　　├── header.js                  // 상품관리 내 상품추가  
　　│　　│　　└── table.js                   // 상품관리 내 상품현황  
　　│　　├── vending-machine-manage  
　　│　　│　　├── index.js                   // 잔돈충전 메뉴 컴포넌트  
　　│　　│　　├── header.js                  // 잔돈충전 내 충전하기  
　　│　　│　　└── stored.js                  // 잔돈충전 내 보유한 동전  
　　│　　└── product-purchase  
　　│　　　　├── index.js                    // 상품구매 메뉴 컴포넌트  
　　│　　　　├── header.js                   // 상품구매 내 금액 투입  
　　│　　　　├── inserted.js                 // 상품구매 내 투입한 금액 컴포넌트  
　　│　　　　├── products.js                 // 상품구매 내 구매가능 상품현황  
　　│　　　　└── changes.js                  // 상품구매 내 잔돈 반환  
　　├── essential  
　　│　　└── component.js                   // 컴포넌트 추상화 클래스  
　　├── model  
　　│　　└── product.js                     // 상품 추상화 클래스  
　　└── utils  
　　　　├── constants.js                    // 상수를 모아놓은 곳  
　　　　├── storage.js                      // localStorage 관련 기능  
　　　　├── style.js                        // css 적용하기 위해 만듦  
　　　　└── validator.js                    // 유효성 검사 기능 모아놓은 곳  

---

## **✅** 구현할 기능 목록

### 🌏 공통

- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되게 한다
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보를 불러오게 한다
- 유효성 검증 실패등 모든 예외는 alert으로 알린다

### 🔵 상품관리 탭

- 상품에 대한 입력을 검증하고 추가한다
  - 상품명, 가격, 수량 입력시 공백이 아닌지 검증한다
  - 상품 가격이 숫자만으로 이루어져있는지 검증한다
  - 상품 가격이 100원 이상, 10원으로 나누어 떨어지는지 검증한다
  - 모든 입력이 유효하면 상품을 추가한다

### 🔵 잔돈충전 탭

- 자판기가 보유할 금액을 충전한다
  - 최초 금액은 0원이다
  - 입력이 10원단위 숫자인지 검증한다
  - 충전시 동전 개수가 무작위로 충전된다
  - 10원 단위로 입력되지 않을시 충전되지 않는다
  - 금액 입력이 유효하면 충전한다

### 🔵 상품구매 탭

- 사용자가 금액 투입할 수 있다
  - 최초 금액은 0원이다
  - 10원으로 나누어 떨어지는 금액만 투입할 수 있다
  - 투입한 금액은 누적된다
- 투입한 금액에 맞춰 상품을 구매할 수 있다
  - 구매하면 투입한 금액이 줄어든다
  - 구매하면 상품 수량이 줄어든다
  - 상품 수량이 0이 된 상품은 더이상 보이지 않는다
  - 투입한 금액에 비해 상품 가격이 비싸면 구매 불가함을 알린다
- 남은 금액에 대해서 잔돈을 반환한다
  - `반환하기` 버튼을 통해 반환받을 수 있다
  - 남은 금액이 0원이 아닌지 검증한다
  - 최소 개수의 동전으로 반환한다
  - 자판기가 보유한 동전의 단위가 잔돈보다 크면 반환하지 않는다
  - 잔돈을 전부 반환할 수 없는 경우 반환할 수 있는 금액만 반환한다

---

## **✔ 기능 요구 사항**

반환되는 동전이 최소한이 되는 자판기를 구현한다.

### **1) 공통**

상단에 `탭`메뉴가 존재하며 각 탭에 따라 적절한 기능을 수행한다.

- `상품 관리`탭은 자판기가 보유하고 있는 **상품을 추가**하는 기능을 수행한다.
- `잔돈 충전`탭은 **자판기가 보유할 금액을 충전**하는 기능을 수행한다.
- `상품 구매`탭은 사용자가 **금액을 투입**할 수 있으며, 투입한 금액에 맞춰 **상품을 구매**하고, 남은 금액에 대해서는 **잔돈을 반환**하는 기능을 수행한다.
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

### **2) 상품 관리 탭**

`상품 관리`탭에서, 다음과 같은 규칙을 바탕으로 상품을 추가한다.

- 최초 상품 목록은 비워진 상태이다.
- 상품명, 가격, 수량을 입력해 상품을 추가할 수 있다.
  - 상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 한다.
- 사용자는 추가한 상품을 확인할 수 있다.

### **3) 잔돈 충전 탭 (자판기 보유 동전)**

`잔돈 충전` 탭에서, 다음과 같은 규칙으로 자판기 보유 금액을 충전한다.

- `잔돈 충전` 탭에서 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
- 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, `충전하기` 버튼을 눌러 자판기 보유 금액을 충전할 수 있다.
  - 자판기 보유 금액은 `{금액}원` 형식으로 나타낸다.
- 자판기 보유 금액만큼의 동전이 무작위로 생성된다.
  - 동전의 개수는 `{개수}개` 형식으로 나타낸다.
- 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다.

### **4) 상품 구매 탭**

`상품 구매`탭에서, 다음과 같은 규칙을 바탕으로 금액을 충전하고, 상품을 구매하며, 잔돈을 반환한다.

- `상품 구매` 페이지에서 최초 충전 금액은 0원이며, 반환된 각 동전의 개수는 0개이다.
- 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, `투입하기`버튼을 이용하여 금액을 투입한다.
  - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
  - 자판기가 보유한 금액은 `{금액}원` 형식으로 나타낸다.
- 금액은 누적으로 투입할 수 있다.
- 사용자는 `반환하기` 버튼을 통해 잔돈을 반환 받을 수 있다.

**상품 구매 > 잔돈 계산 모듈**

`상품 구매` 탭에서 잔돈 반환 시 다음과 같은 규칙을 통해 잔돈을 반환한다.

- 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
- 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
- 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
- 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타낸다.

---

## **✔ 프로그래밍 요구 사항**

### **DOM 선택자**

각 요소에 아래와 같은 선택자를 반드시 지정한다.

**탭 메뉴 버튼**

- `상품 구매` 탭으로 이동하는 메뉴 버튼 id는 `product-purchase-menu`이다.
- `잔돈 충전`탭으로 이동하는 메뉴 버튼 id는 `vending-machine-manage-menu`이다.
- `상품 관리`탭으로 이동하는 메뉴 버튼 id는 `product-add-menu`이다.

**상품 관리(추가) 메뉴**

- 상품 추가 입력 폼의 상품명 입력 요소의 id는 `product-name-input`이다.
- 상품 추가 입력 폼의 상품 가격 입력 요소의 id는 `product-price-input`이다.
- 상품 추가 입력 폼의 수량 입력 요소의 id는 `product-quantity-input`이다.
- 상품 `추가하기` 버튼 요소의 id는 `product-add-button`이다.
- 추가한 각 상품 요소의 class명은 `product-manage-item`이며, 하위에 아래 요소들을 갖는다.
  - 상품명에 해당하는 요소의 class명은 `product-manage-name`이다.
  - 가격에 해당하는 요소의 class명은 `product-manage-price`이다.
  - 수량에 해당하는 요소의 class명은 `product-manage-quantity`이다.

**잔돈 충전 (자판기 보유 동전) 메뉴**

- 자판기가 보유할 금액을 충전할 요소의 id는 `vending-machine-charge-input`이다.
- `충전하기` 버튼에 해당하는 요소의 id는 `vending-machine-charge-button`이다.
- 충전된 금액을 확인하는 요소의 id는 `vending-machine-charge-amount` 이다.
- 보유한 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - 500원: `vending-machine-coin-500-quantity`
  - 100원: `vending-machine-coin-100-quantity`
  - 50원: `vending-machine-coin-50-quantity`
  - 10원: `vending-machine-coin-10-quantity`

**상품 구매 메뉴**

- 투입 금액 입력 요소의 id는 `charge-input`이다.
- 투입하기 버튼 요소의 id는 `charge-button`이다.
- 투입한 금액을 확인하는 요소의 id는 `charge-amount`이다.
- 반환하기 버튼 요소의 id는 `coin-return-button`이다.
- 반환된 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - 500원: `coin-500-quantity`
  - 100원: `coin-100-quantity`
  - 50원: `coin-50-quantity`
  - 10원: `coin-10-quantity`
- 각 상품 요소의 class명은 `product-purchase-item`이고, 하위에 아래 요소들을 갖는다.
  - 구매 버튼에 해당하는 요소의 class명은 `purchase-button`이다.
  - 상품명에 해당하는 요소의 class명은 `product-purchase-name`이다.
  - 가격에 해당하는 요소의 class명은 `product-purchase-price`이다.
  - 수량에 해당하는 요소의 class명은 `product-purchase-quantity`이다.
  - 상품명은 `dataset` 속성을 사용하고 `data-product-name` 형식으로 저장한다.
  - 가격은 `dataset` 속성을 사용하고 `data-product-price` 형식으로 저장한다.
  - 수량은 `dataset` 속성을 사용하고 `data-product-quantity` 형식으로 저장한다.

---

### **라이브러리**

- 잔돈을 무작위로 생성하는 기능은 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInList`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

---

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

---

## **📝 과제 진행 요구사항**

- 미션은 [javascript-vendingmachine-precourse](https://github.com/woowacourse/javascript-vendingmachine-precourse/) 저장소를 Fork/Clone해 시작한다.
- **기능을 구현하기 전에 javascript-vendingmachine-precourse/docs/README.md 파일에 구현할 기능 목록을 정리**해 추가한다.
- **Git의 커밋 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위**로 추가한다.
  - [AngularJS Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 참고해 commit log를 남긴다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출 문서](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 를 참고한다.
