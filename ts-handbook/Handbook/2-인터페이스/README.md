# 인터페이스(Interface)

> TS의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 것입니다. 이를 "덕 타이핑(duck typing)" 혹은 "구조적 서브타이핑(structural subtyping)"이라고도 합니다. **TS에서, 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것뿐만 아니라 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법**입니다.

<br />

## 첫 번째 인터페이스(Our First Interface)

어떻게 인터페이스가 동작하는지 확인하는 가장 쉬운 방법은 간단한 예제로 시작하는 것입니다.

```ts
function printLabel(labeledObj: { lable: string }) {
    console.log(labeedObj.lable);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
```
