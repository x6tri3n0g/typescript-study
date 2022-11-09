function square(num: number) {
    return num * num;
}

console.log(square(3));

function person(name: string) {
    return `Hi there, ${name}`;
}

console.log(person('Hyun'));

const doSomething = (person: string, age: number, isFunny: boolean) => {
    // ...
};
doSomething('ChickenFace', 78, true);
