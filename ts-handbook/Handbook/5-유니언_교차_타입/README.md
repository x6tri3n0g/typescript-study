# 유니언 타입(Union Types)

우리는 가끔 `number`나 `string`을 매개변수로 기대하는 라이브러리를 사용할 때가 있습니다. 

```ts
function padLeft(value: string, padding: any) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, get '${padding}'`);
}

padLeft("Hello world", 4);
```