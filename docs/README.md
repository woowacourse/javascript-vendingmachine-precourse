# 프로젝트 소개

우아한 테크 프리코스의 두 번째 과제인 vending machine 프로젝트이다. 이 프로젝트는 한 명의 프론트엔드 개발자로 진행되었으며, 구현 환경은 ES6+ 이다. Chrome Browser(버전 96.0.4664.55)에서 테스트, 구현되었으며, 만들어질 프로덕트는 다음과 같은 게임이다.

만들어질 자판기는 상품관리 기능을 통해 상품을 추가할 수 있으며, 상품 이름과 가격, 수량을 입력하여 상품을 추가할 수 있다. 자판기에 입력된 상품들은 모두 구매가 가능하며, 구매 이후 돌려줄 잔돈을 충전할 수도 있다.

coding convention은 [NHN FE 개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION) 을 따랐다.

2주차 과제에서 느꼈던 점들을 바탕으로 클래스는 다음과 같이 분리하였다. 기본적으로 MVC 패턴을 따른다. -> 2주차 과제에선 비즈니스 로직을 다루는 클래스와 UI를 다루는 클래스로 크게 분리하였습니다. 하지만 어설픈 설계 때문인지, 기준이 모호해서인지 데이터를 다루는 핸들러 함수가 뷰에 작성되어 있고, 또 서로 상속관계를 갖게하여 클래스 간 의존도가 높아지게 되었습니다.

이러한 문제점들을 개선하고자 명확하게 책임을 분배하는 MVC 패턴(아키텍처)를 따르게 되었습니다.

- VendingMachineModel Class : 자판기에서 사용되는 데이터 모델 클래스입니다.
- VendingMachineController Class : 자판기에서 사용되는 모델, 뷰를 수정하는 컨트롤러 클래스입니다.
- VendingMachineView Class : 자판기에서 사용되는 뷰 클래스입니다.
- VendingMachineUtil Class : 자판기에서 사용되는 유틸 함수들이 작성되어 있는 클래스입니다.

# 폴더 구조

```
├── src
│   ├── index.js
│   ├── app
│   │   │── index.js
│   │   │── vendingMachineModel.js
│   │   │── vendingMachineController.js
│   │   └── vendingMachineView.js
│   │   └── vendingMachineUtil.js
│   └── lib
│        │── constants.js
│        └── utils.js
│── docs
│    └── README.md
```
