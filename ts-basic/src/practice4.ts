// interface Person {
//     name: string;
//     age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미
// }

// interface Developer extends Person {
//     skills: string[];
// }

// const person: Person = {
//     name: 'Hwang',
//     age: 27,
// };

// const expert: Developer = {
//     name: 'Kim',
//     skills: ['JavaScript', 'react'],
// };

// const people: Person[] = [person, expert];

type Person = {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도되고 안해도 되는 값이라는 의미
};

// `&`는 Intersection으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types

type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: 'Hwang',
};

const expert: Developer = {
    name: 'Kim',
    skills: ['JavaScript', 'React'],
};

type People = Person[]; // Person[]을 이제 앞으로 People이라는 타입으로 사용 할 수 있습니다.

const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';

const color: Color = 'red';

const colors: Color[] = ['red', 'orange'];
