# Basic Type Annotation

JS에는 여러 종류의 타입이 있습니다.

## Primitive Types

-   Number
-   String
-   Boolean
-   Null
-   Undefined
-   Void
-   Any
-   Never
-   Unknown

## Object Types

-   Object
-   Array
-   Function
-   Tuple
-   Enum
-   Others!

## Variable Types

변수에 기본 타입을 할당하는 것은 쉽다! 단지 변수명 다음에 타입을 더해라!
이를 `Type Annotation`이라고 부른다.

```
const myAwesomeVariable: string = 'So Awesome!';
```

`:` 다음에 타입을 적어주면 되는데 이는 매우 직관적이다.

```
let myVar: type = value;
```

타입은 `number`, `boolean`, `string`, `undefined` 등 원하는 걸 쓰면 됩니다.

\*강의 내용 중 이미 알거나 넘어가도 되는 내용은 메모하지 않습니다.

TypeScript는 타입오류에 대해서 구체적인 에러를 알려줍니다.

## Compiling TypeScript

JavaScript로 작성된 코드는 결국에 TypeScript로 컴파일링됩니다.

### 컴파일링하기

```
> tsc /file/path/basics.ts
```

컴파일을 완료하면 같은 디렉터리에 컴파일링된 JS 파일이 생성됩니다. 컴파일링 후에는 애너테이션해놓았던 것들이 모두 사라집니다. 혹시 내가 타입 애너테이션을 잘못했거나 애너테이션해놓은 변수에 타입이 맞지 않은 값을 설정한다면 컴파일 시 한번 더 알려줍니다. TS 컴파일 시 오류가 있더라도 JS로 컴파일링하는 것을 중지시키거나 하지 않습니다.

TS는 컴파일링 시 설정해놓은 JS 버전에 맞게 변환합니다.

## Type Inference - 타입추론

실제로 애너테이션은 타입과 구문의 기초를 배울 때는 좋은 도구이지만 모든 곳에 지정할 필요는 없습니다.
왜냐하면 TS가 알아서 해당 변수에 대한 타입을 추론하기 때문입니다. 이를 `타입추론`이라고 합니다.

변수 선언시 값을 할당하면 TS는 해당 변수가 어떤 타입을 가질 수 있는지 정의합니다. 그 다음은 사용하는 곳에서 타입 추론을 통해 우리에게 피드백해줄 수 있는 것이죠.

하지만, 우리가 직접 타입 애너테이션을 해주어야 하는 경우도 있는데 변수가 문자열이 아니라 **문자열 배열 타입**이라고 알려주는 경우가 있습니다.

## Any

'any'는 탈출구입니다! 해당 변수가 당신이 어떤 것이든 하는 것을 위해 타입 체킹을 끄는데 사용할 수 있습니다. 하지만 Any 타입은 최대한 지양해야합니다. 왜냐하면 모든 타입을 any로 선언하게 되면 우리가 TS를 사용하는 의미가 없기 때문입니다. 추론도 할 수 없고 오류도 잡을 수 없습니다.

## 지연된 초기화 및 암묵적 Any

```
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovies: string;  // 여기에서 타입 에너테이션을 해주지 않으면 암묵적으로 any가 선언되어 TS를 사용하는 의미가 없습니다.

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}
```

foundMovies 변수 선언 당시 타입을 지정해 주는 것이 암묵적 any를 방지할 수 있는 방법입니다.
