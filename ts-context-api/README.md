# TypeScript 환경에서 React Context API 사용하기

<br />

> 이 스터디를 통해서 TypeScript와 Context API를 제대로 활용하는 방법에 대해서 알아보겠습니다. Context API를 사용함에 있어서, 코드 구조를 어떻게 가져갈 지에 대해서는 딱히 정해진 방법이 없습니다. 모든 내용은 [TypeScript 환경에서 리액트 Context API 제대로 활용하기](https://velog.io/@velopert/typescript-context-api)을 기반해서 작성합니다.

<br />
<br />


## 프로젝트 세팅

<br />

먼저, Context API를 연습해볼 TypeScript가 적용된 React 프로젝트를 준비합니다.

```
$ npx create-react-app ts-context-api --typescript
```

<br />

우리는 Context API를 활용하여 투두리스트를 만들어보겠습니다. Context API를 활용하기 전에, 컴포넌트 몇가지를 미리 만들어보겠습니다.

<br />

 - `TodoForm.tsx` : 새 할 일을 등록할 때 사용
 - `TodoItem.tsx` : 할 일에 대한 정보를 보여줌
 - `TodoList.tsx` : 여러 TodoItem들을 렌더링해줌

<br />

src 디렉터리에 components 디렉터리를 만들고, 그 안에 위 컴포넌트들을 하나씩 만들어보겠습니다.

<br />
<br />

> src/components/TodoForm.tsx
TodoForm 컴포넌트는 새 항목을 등록 할 수 있는 컴포넌트입니다. 이 컴포넌트에서는 하나의 input과 하나의 button을 렌더링합니다. input의 value값은 `useState`를 통해서 관리하도록 하겠습니다. 추가적으로, submit 이벤트가 발생 했을 때는 새 항목을 생성하고 value값을 초기화 해줄건데요, 새 항목을 생성하는 부분은  추후 구현해주겠습니다.

<br />

