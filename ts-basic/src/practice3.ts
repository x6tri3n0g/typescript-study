// interface 사용하기

// Shape interface를 선언
interface Shape {
    getArea(): number; // Shape interface에는 getAera라는 함수가 꼭 있어야 하며 해당 함수의 변환값은 숫자입니다.
}

class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.

    radius: number; // 멤버 변수 radius 값을 설정합니다.

    constructor(radius: number) {
        this.radius = radius;
    }

    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Ractangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Ractangle(10, 5)];

shapes.forEach((shape) => {
    console.log(shape.getArea());
});
