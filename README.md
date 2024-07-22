# WEEK4

카카오 선물하기 상품 디테일, 주문 페이지 구현

## ✨How to start

```
npm install
cd react-product-order
npm run start
```

## STEP1

### 📜Requirements

- React의 form, ref, state만 사용하여 구현한다.
- UI 구현
  - [x] 상품 상세 페이지 UI
  - [x] 결제 페이지 UI
- API 구현
  - [x] `/api/v1/products/{productId}/detail`
  - [x] `/api/v1/products/{productId}/options`
  - [x] 없는 상품의 경우 메인 페이지로 연결
- [x] 나에게 선물하기 버튼 클릭 시 로그인이 되어있지 않다면 로그인 페이지로 이동하도록 함.

## STEP2

### 📜Requirements

- 상품 상세 페이지
  - [x] 상품의 개수를 option API의 giftOrderLimit을 초과한 경우 선택이 불가하도록 함.
- 결제 페이지 Form validation
  - [x] 카드 메시지를 입력하지 않으면 메시지를 입력하도록 안내
  - [x] 카드 메시지가 100글자가 넘어가면 100자 이내로 입력하도록 안내
  - [x] 현금 영수증 checkbox 클릭 시 현금영수증 번호가 입력되었는지 확인
  - [x] 현금 영수증 입력은 숫자만 입력하도록 안내

## STEP3

### 📜Requirements

- react-hook-form 사용하여 리팩터링
  - [x] form / input
  - [x] validate

## STEP4

### ❓Q1. 제어 컴포넌트와 비제어 컴포넌트의 차이가 무엇이고 제어 컴포넌트로 Form을 만들어야 하는 경우가 있다면 어떤 경우일까?

폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어한다. 주로 `useState`와 같은 상태 관리 훅을 사용한다. 이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 **제어 컴포넌트 (controlled component)** 라고 한다. 대부분 경우에 폼을 구현하는데 제어 컴포넌트를 사용하는 것이 좋다.

반면, 비제어 컴포넌트는 DOM 자체에서 폼 데이터가 다루어진다. 모든 state 업데이트에 대한 이벤트 핸들러를 작성하는 대신 비제어 컴포넌트를 만들려면 [ref를 사용](https://ko.legacy.reactjs.org/docs/refs-and-the-dom.html)하여 DOM에서 폼 값을 가져올 수 있다.

```tsx
//예시
import React, { useRef } from 'react';

function TextInput() {
  //useRef를 통해 input 요소에 직접 접근
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

비제어 컴포넌트는 값이 실시간으로 동기화 되지 않는다. 만약 a와 b라는 컴포넌트가 있을 때, a에 대한 변화를 즉각적으로 b가 영향을 받아야 할때 비제어 컴포넌트는 이런 방식에 대한 대응을 할 수 없다.

제어 컴포넌트의 경우 사용자가 입력을 하는 액션을 취할때마다 리렌더링을 발생시키는 반면, 비제어 컴포넌트는 사용자가 직접 트리거 하기 전까지는 리렌더링을 발생시키지도 않고 값을 동기화 시키지도 않는다.

### cf. Ref

일반적인 React의 데이터 플로우에서 [props](https://ko.legacy.reactjs.org/docs/components-and-props.html)는 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단이다. 자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링해야 한다. 그러나, 일반적인 데이터 플로우에서 벗어나 직접적으로 자식을 수정해야 하는 경우도 가끔씩 있다.

### Ref를 사용해야 할 때

- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
- 애니메이션을 직접적으로 실행시킬 때.
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양하자.

### useRef

useRef는 단순히 `current`라는 속성을 가지는 객체를 반환한다. 이 속성은 변경될 수 있지만, React는 useRef 객체의 변경을 감지하지 않고 리렌더링을 트리거하지 않는다. useRef 객체는 컴포넌트의 전 생애 주기 동안 유지되며, useRef의 변경은 컴포넌트의 상태 변경과 달리 UI에 직접적인 영향을 주지 않는다.

### **useRef와 리렌더링**

왜 비제어 컴포넌트를 사용할 땐 useRef를 사용하고, 이러한 useRef는 왜 리렌더링을 발생시키지 않는걸까?

- **객체의 참조 유지**: useRef는 컴포넌트가 리렌더링될 때도 동일한 객체를 반환한다. 이는 리렌더링이 발생하지 않는 한 같은 참조를 유지한다는 것을 의미한다. (같은 메모리 주소를 갖고있기 때문에 자바스크립트의 `===` 연산이 항상 true 를 반환한다.) 즉 변경사항을 감지할 수 없어서 리렌더링을 하지 않는다는 뜻이다.
- **직접적인 상태 변경 없음**: useRef의 `current` 속성을 업데이트해도 컴포넌트의 상태가 변경되지 않으므로 React는 리렌더링을 트리거하지 않는다.

#### 참고

https://ko.legacy.reactjs.org/docs/uncontrolled-components.html

https://ko.legacy.reactjs.org/docs/forms.html#controlled-components

https://velog.io/@yukyung/React-제어-컴포넌트와-비제어-컴포넌트의-차이점-톺아보기

### ❓Q2. input type의 종류와 각각 어떤 특징을 가지고 있을까?

| 태그     |                                                                    특징                                                                    |
| -------- | :----------------------------------------------------------------------------------------------------------------------------------------: |
| text     |                                                   단일 행의 텍스트 입력을 받을 수 있음.                                                    |
| password |                  텍스트 입력이 마스킹되어 보안이 필요한 정보를 입력받을 때 사용한다. minLength , maxLength 속성 사용 가능                  |
| email    |                                   이메일 주소 형식을 입력받는다. 이메일 형식의 유효성을 검사할 수 있음.                                    |
| number   |                            숫자만 입력할 수 있다. min, max, step 속성을 통해 값의 범위와 증감을 설정할 수 있음.                            |
| tel      | 전화번호 형식을 입력받는다. 형식 검사는 없지만 전화번호 입력에 최적화된 키패드를 제공한다. pattern 속성으로 전화번호 형식 검증이 가능하다. |
| url      |                                          URL 형식을 입력받는다. 유효한 URL 형식을 검사할 수 있음.                                          |
| checkbox |                                                  다중 선택이 가능한 체크박스를 생성한다.                                                   |
| radio    |                                         라디오 버튼을 생성하여 여러 옵션 중 하나만 선택할 수 있음.                                         |
| file     |                                                     파일을 선택하여 업로드 할 수 있음.                                                     |
| submit   |                                                   폼 데이터를 제출하는 버튼을 생성한다.                                                    |

### ❓Q3. label tag는 어떤 역할을 하며 label로 input field를 감싸면 어떻게 동작할까?

### `<label>` 태그의 역할

1. **접근성 향상**: 화면 읽기 프로그램은 `<label>` 태그를 읽어서 사용자가 어떤 정보를 입력해야 하는지 설명해준다.
2. **클릭 영역 확대**: `<label>` 태그를 사용하면 레이블을 클릭하여 해당 입력 필드로 포커스를 이동할 수 있. 이는 사용자의 편의성을 높인다.
3. **폼 요소와의 연계**: `<label>` 태그는 `for` 속성을 사용하여 특정 입력 필드와 연결할 수 있다. 이렇게 하면 레이블을 클릭했을 때 해당 입력 필드로 포커스를 이동시킬 수 있다.

### `<label>` 태그 사용법

1. **`for` 속성 사용**: `for` 속성은 레이블과 입력 필드를 연결한다. `for` 속성의 값은 연결된 입력 필드의 `id` 속성과 동일해야 한다.

   ```html
   <label for="username">Username:</label> <input type="text" id="username" name="username" />
   ```

2. **`<label>` 태그로 입력 필드 감싸기**: `<label>` 태그로 입력 필드를 감싸면 `for` 속성을 생략할 수 있다. 이 경우 레이블을 클릭하면 자동으로 내부의 입력 필드로 포커스가 이동한다.

   ```html
   <label>
     Username:
     <input type="text" name="username" />
   </label>
   ```
