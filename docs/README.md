# 프로젝트 소개

우아한 테크 프리코스의 두 번째 과제인 vending machine 프로젝트이다. 이 프로젝트는 한 명의 프론트엔드 개발자로 진행되었으며, 구현 환경은 ES6+ 이다. Chrome Browser(버전 96.0.4664.55)에서 테스트, 구현되었으며, 만들어질 프로덕트는 다음과 같은 게임이다.

만들어질 자판기는 상품관리 기능을 통해 상품을 추가할 수 있으며, 상품 이름과 가격, 수량을 입력하여 상품을 추가할 수 있다. 자판기에 입력된 상품들은 모두 구매가 가능하며, 구매 이후 돌려줄 잔돈을 충전할 수도 있다.

coding convention은 [NHN FE 개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION) 을 따랐다.

2주차 과제에서 느꼈던 점들을 바탕으로 클래스는 다음과 같이 분리하였다. 기본적으로 MVC 패턴을 따른다. -> 2주차 과제에선 비즈니스 로직을 다루는 클래스와 UI를 다루는 클래스로 크게 분리하였습니다. 하지만 어설픈 설계 때문인지, 기준이 모호해서인지 데이터를 다루는 핸들러 함수가 뷰에 작성되어 있고, 또 서로 상속관계를 갖게하여 클래스 간 의존도가 높아지게 되었습니다.

이러한 문제점들을 개선하고자 명확하게 책임을 분배하는 MVC 패턴(아키텍처)를 따르게 되었습니다. 처음에는 VendingMachineModelClass, VendingMachineViewClass, VendingMachineControllerClass, VendingMachineUtilClass 4개로 구성하였으나, 하나의 클래스가 여러 개의 기능을 가지고 있다보니, 가독성이 떨어지고 유지보수가 힘들어져 분리하였습니다.

🕹 Controller는 다음과 같이 구성됩니다.

- 상품 추가 탭에서 돔과 모델을 조작하는 `ProductAddControllerClass`
- 자판기 관리 탭에서 돔과 모델을 조작하는 `VendingMachineManageControllerClass`
- 상품 구매 탭에서 돔과 모델을 조작하는 `ProductPurchaseControllerClass`

📺 View는 다음과 같이 구성됩니다.

- 상품 추가 탭의 화면을 그리는 `ProductAddViewClass`
- 자판기 관리 탭의 화면을 그리는 `VendingMachineManageViewClass`
- 상품 구매 탭의 화면을 그리는 `ProductPurchaseViewClass`

📄 Model은 다음과 같이 구성됩니다.

- 앱의 모든 데이터 모델을 관리하는 `VendingMachineModelClass`

# 폴더 구조

```
├── src
│   ├── index.js
│   ├── app
│   │   │── controllers
│   │   │    │── index.js
│   │   │    │── ProductAddController.js
│   │   │    │── ProductPurchaseController.js
│   │   │    └── VendingMachineManageController.js
│   │   │── model
│   │   │    └── index.js
│   │   └── views
│   │       │── index.js
│   │       │── ProductAddView.js
│   │       │── ProductPurchaseView.s
│   │       └── VendingMachineManageView.js
│   │── lib
│   │     │── constants.js
│   │     └── utils.js
│   └── module
│        │── coin.js
│        └── store.js
│── docs
│    └── README.md
```

# 기능 구현사항

## 1. 설계한 대로 클래스들을 작성한다.

    🖊 MVC 패턴에 따라 크게 네 개의 클래스로 구분한다.

    🖊 브라우저의 돔을 조작하여 화면을 그리는 뷰

    🖊 뷰와 모델에 데이터를 뿌려주고, 뿌려줄 데이터를 계산하는 컨트롤러

    🖊 데이터 모델을 갖고, 데이터 모델을 수정할 수 있는 모델

    🖊 공통으로 쓰이는 로직을 담당하는 유틸 클래스

## 2. 헤더 탭을 구현한다. (상품관리 잔돈충전 상품구매 탭)

    🖊 탭을 누르면, 누른 탭에 맞게 템플릿이 렌더링이 된다.

    ✅ refactor : 뷰가 모델을 가지고 뷰를 그려낼 수 있다. 이 때 모델을 직접 변경하거나 참조하는 것은 불가능하고, 컨트롤러로 부터 인자로서 받아야한다.

## 2. 상품을 입력하면, 상품 현황에 입력된 상품들이 보여진다.

    🖊 기존 상품 현황 목록에 추가된다.

    🖊 입력된 상품들 및 input 태그에 입력된 정보들은 탭 변경 이후에도 유지된다.

## 3. 상품을 입력할 때의 에러 상황을 제어한다. 에러메세지 출력

    🖊 가격은 100원부터 시작하여 10원으로 나누어 떨여져야 한다.

    🖊 가격 및 수량에 음수는 입력 불가능하다.

    🖊 모든 input에 값이 채워져 있어야한다.

## 4. 잔돈을 입력하여 자판기에 동전을 충전할 수 있다.

    🖊 충전하기 버튼을 누르면 동전을 랜덤한 종류로 생성한다. (잔돈 랜덤 생성)

    🖊 10원으로 나누어 떨어져야 한다.

    🖊 음수는 입력이 불가능하다.

    🖊 누적 충전이 가능하다. (충전을 한번 더 한다고 초기화 되는 것은 아니다.)

## 5. 상품 구매 - 구매하기 버튼을 클릭하면 상품을 살 수 있다.

    🖊 없는 상품은 구매할 수 없다.

    🖊 수량이 0개이면 구매가 불가능하다.

## 6. 상품 구매 - 유저의 금액을 충전할 수 있고, 상품을 구매하면 투입한 금액이 줄어든다.

    🖊 음수는 입력이 불가능하다.

    🖊 10원으로 나누어 떨어져야 한다.

    🖊 투입 금액보다 비싼 상품들은 살 수 없다.

## 7. 상품 구매 - 상품을 구매하고 잔돈을 거슬러 받는다.

    🖊 반환 금액은 현재 보유한 최소 개수의 동전으로 돌려준다.

    🖊 잔돈을 반환할 수 없는 경우 반환할 수 있는 금액만 반환한다.

## 8. 로컬스토리지에 데이터를 저장하고, 불러올 수 있다.

    🖊 새로고침해도 이전 작업의 결과물들이 존재한다.ad

## 8. 리팩토링, 코드수정

    ✅ refactor : VendingMachineModel의 데이터는 함수를 통해서만 접근하고, 수정한다.

    ✅ refactor : 로컬스토리지 스토어를 단일 스토어로 유지하기 위해 store 모듈을 만들어 객체를 export 한다.

    ✅ refactor : 코드가 길어지는 함수를 보기 좋게 분리

    ✅ refactor : 렌더링 부분의 하드코딩 -> 상수 또는 함수로 수정

    ✅ refactor : 뷰를 메인뷰 - 세개의 뷰로 구성한다. (하나의 뷰로 구성하자니 코드 길이가 너무 길어져 유지보수가 힘들다.)

    ✅ refactor : 컨트롤러를 메인컨트롤러 - 세개의 컨트롤러로 구성한다.

    ✅ refactor : 폴더구조에 맞게 모델 모듈을 옮김

    ✅ refactor : Mission.Random.pickNumberInRange를 사용할 수 없어 Math.random으로 아이디 숫자 제너레이터를 구현한다

    ✅ refactor : 마크업 룰을 지킨다. chargeAmount는 #charge-amount로 감싸져야 하며, 동전은 {}개로 표시한다.

    ✅ refactor : 상수 객체는 변하지 않아야 하므로 Object.freeze() 한다.

    ✅ refactor : 게임에서 쓰이는 상수, 유틸 함수로 분리 - 코인 초깃 값 수정

    ✅ refactor : 게임에서 쓰이는 상수, 유틸 함수 - 범용적 상수 함수 - 템플릿 상수, 유틸 함수를 하나의 파일로 합친다

    ✅ refactor : 데이터 모델을 처음 초기화할 때 로컬스토리지에 들어있는 값에 따라 초기화되는데, 이 초기화 로직을 수정한다.
        - 로컬스토리지에 들어있는 값이 온전하지 못하다면, 에러가 발생할 수 있다. (필요한 프로퍼티가 사라져 있다면)

    ✅ refactor : 코인에서 사용되는 조건문을 유틸 함수로 변경

    ✅ refactor : 불필요한 멤버는 삭제한다. vendingMachineChargeAmount는 coins를 통해 계산해낼 수 있으므로 삭제한다

        - 하나의 정보를 표현하는데, 두 개의 멤버로 관리하고 있으므로 예기치 못한 결과가 발생할 수 있다고 생각함
        - coins는 변했는데 vendingMachineChargeAmount는 변하지 않았다면? 모두 자판기가 갖고 있는 돈이라는 정보를 표현하는데, 서로 다른 값이 되어버린다.
