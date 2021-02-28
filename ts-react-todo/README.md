# TypeScript + React + TodoList

> 혼자서 만들어보는 `TS` + `React` Todo List

## 알게된 것

(1) `types.d.ts`를 사용하면 `export`하지 않아도 전역에서 타입을 사용할 수 있다. 즉, 공통된 type들을 작성하지 않아도 된다.(types decoration file)

```ts
// types.d.ts

type Todo = {
    text: string;
    complete: boolean;
};
```
