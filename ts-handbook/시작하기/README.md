> `React`와 `React Native`으로 개발해오며 지금까지 JavaScript(ES6)를 주로 사용해왔습니다. 따라서 `TS for JS Programmer`를 제외한 나머지 Section은 가볍운 정리만 하겠습니다.

<br />
<br />
<br />

# TS for the New Programmer
## JavaScript의 짧은 역사(What is JavaScript? A Brief History)
JS는 처음에  브라우저를 위한 스크립팅 언어로 만들어졌습니다. 그러나 요즘날 많은 개발자들은 오직 JavaScript만을 이용하여 전체 스택을 프로그래밍하고 있습니다.

<br />

JavaScript에는 다양한 별난 점(이상한 점과 놀랄만한 점)이 있으며 이 문제점에서 시작되어 TS가 만들어졌습니다.
예를 들어 JavaScript의 동일 연산자(`==`) 인수를 강제로 변환하여(coerces), 예기치 않은 동작을 유발합니다.
```
if ("" == 0) {
    // true. why?
}
if (1 < x < 3) {
    // 어떤 x 값이던 true
}
```

<br />

대부분의 프로그래밍 언어는 이런 종류의 오류들을 잡아서 표출해주고, 일부는 코드가 실행되기 전인 컴파일 중에 오류를 표출해줍니다. 작은 프로그램을 작성할 경우에는 이런 이상한 점들이 화를 만들기도 하지만 관리는 가능합니다. 그러나 수백 또는 수천 줄의 어플리케이션을 작성할 경우 이런 지속적 놀라움(이상한 점)들은 심각한 문제입니다.

<br />
<br />

## TypeScript: 정적 타입 검사자(TypeScript: A Static Type Checker)


<br />
<br />
<br />

# TS for OOP Programmer


<br />

# TS for Functional Programmers


<br />

# TS for the JS Programmer


<br />

# 5분안에 보는 TypeScript
