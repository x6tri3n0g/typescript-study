/*
    코드 컴파일하기
*/
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
/*
    타입 표기
*/
function greeter2(person) {
    return "Hello, " + person;
}
var user2 = [0, 1, 2];
document.body.textContent = greeter2(user2);
/*
    인터페이스
*/
function greeter3(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user3 = { firstName: 'Jane', lastName: 'User' };
document.body.textContent = greeter3(user3);
/*
    클래스
*/
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
//
// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
//
// let user = new Student("Jane", "M.", "User");
//
// document.body.textContent = greeter(user);
