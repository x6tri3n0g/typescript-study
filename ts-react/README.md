# React 프로젝트에서 TypeScript 사용하기

<br />

> [리액트 프로젝트에서 타입스크립트 사용하기](https://velog.io/@velopert/create-typescript-react-component)을 참고합니다.

<br />
<br />

## 프로젝트 생성

```
$ npx create-react-app ts-react --typescript
```

<br />

위와 같이 react 프로젝트를 생성할 때 `--typescript`을 붙여주면 TypeScript 설정이 적용된 프로젝트가 생성됩니다.
TypeScript를 사용하는 React 컴포넌트는 `*.tsx` 확장자를 사용합니다.

<br />

> App.tsx

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

<br />

이 컴포넌트를 확인하면 `function() { ... }`의 형식을 가지고 있습니다.
이전 React default 세팅은 `const App: React.FC = () => { ... }`와 같이 화살표함수(Arrow Function)를 사용하는 것을 볼 수 있는데 최근 해외 트랜드는 컴포넌트 선언 시 `function` 키워드를 사용하는 것이 트랜드인 듯 싶습니다. 그래서 React 공식 매뉴얼에서도 `function` 키워드를 사용하는 것 같습니다.

<br />
<br />

## 새로운 컴포넌트 만들기
Greetings라는 새로운 컴포넌트를 작성

<br />

> ./src/Greetings.tsx
```
import React from 'react';

type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Hello, {name}</div>
);

export default Greetings;
```

<br />

컴포넌트의 props에 대한 타입을 선언 할 때에는 `type`이나 `interface` 키워드를 사용합니다. 단, 프로젝트에서 일관성을 유지해야합니다.

<br />
<br />

## React.FC의 장단점
`React.FC`를 사용 할 때는 props의 타입을 Generics로 넣어서 사용합니다.([Generics](https://github.com/hyun940630/typescript-study/tree/master/ts-basic)에서 확인 가능) 이렇게 `React.FC`를 사용해서 얻을 수 있는 이점은 두가지가 있습니다.

<br />

첫번째는, props에 기본적으로 `children`이 들어가있다는 것입니다.
컴포넌트의 매게변수를 넣어주는 부분에서 `Ctrl + Space`를 눌러보면 확인할 수 있습니다.

<br />

두번째는 컴포넌트의 defaultProps, propTypes, contextTypes를 설정 할 때 자동완성이 될 수 있다는 것입니다.

<br />
<br />

하지만 단점도 존재합니다. `children`이 옵셔널 형태로 들어가있다보니까 어찌 보면 컴포넌트의 props의 타입이 명백하지 않습니다. 예를 들어 어떤 컴포넌트는 `children`이 무조건 있어야 하는 경우도 있을 것이고, 어떤 컴포넌트는 `children`이 들어가면 안되는 경우도 있을 것입니다. 결국 그에 대한 처리를 하고 싶다면 Props 타입 안에 `children`을 명시해야합니다.
예를 들자면 다음과 같습니다.

<br />

```
type GreetingsProps = {
    name: string;
    children: React.ReactNode;
}
```

<br />

결국 React.FC에 `children` props가 기본적으로 들어있는 것은 장점이 아닙니다. 차라리, `React.FC`를 사용하지 않고 GreetingsProps 타입을 통해 `children`이 있다 없다를 명백하게 명시하는 것이 덜 헷갈립니다.
추가적으로, `React.FC`를 사용하는 경우 `defaultProps`가 제대로 작동하지 않습니다. 이는 정말 치명적입니다. 

<br />

```
// Greetings.tsx
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

<br />

```
// App.tsx
import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  return <Greetings name="Hello" />;
};

export default App;
```

<br />

위 예제에서 확인해 볼 수 있듯이 `mark`를 `defaultProps`로 넣었음에도 불구하고 `mark` 값이 없다면서 제대로 작동하지 않는 것을 확인할 수 있습니다.

<br />

해결방법은 비구조화 할당을 하는 과정에서 기본값을 설정해주는 것이죠. 이렇게 하면 defaultProps는 무의미해집니다.
반면, 만약 `React.FC`를 생략하면 어떻게 될까요?

<br />

> Greeting.tsx
```

```