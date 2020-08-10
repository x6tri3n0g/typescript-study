"use strict";
// interface 사용하기
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Ractangle = /** @class */ (function () {
    function Ractangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Ractangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Ractangle;
}());
var shapes = [new Circle(5), new Ractangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
