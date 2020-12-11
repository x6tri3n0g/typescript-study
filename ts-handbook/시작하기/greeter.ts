/*
    코드 컴파일하기
*/

// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.textContent = greeter(user);


/*
    타입 표기
*/

// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = [0, 1, 2];

// document.body.textContent = greeter(user);


/*
    인터페이스
*/

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return 'Hello, ' + person.firstName + ' ' + person.lastName;
// }

// let user = { firstName: 'Jane', lastName: 'User' };

// document.body.textContent = greeter(user);


/*
    클래스
*/

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);