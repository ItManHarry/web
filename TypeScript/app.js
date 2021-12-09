/// <reference path='IShape.ts'/>
var shapes;
(function (shapes) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log('Circle is draw.');
        };
        return Circle;
    }());
    shapes.Circle = Circle;
})(shapes || (shapes = {}));
/// <reference path='IShape.ts'/>
var shapes;
(function (shapes) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log('Triangle is draw.');
        };
        return Triangle;
    }());
    shapes.Triangle = Triangle;
})(shapes || (shapes = {}));
/// <reference path='IShape.ts'/>
/// <reference path='Circle.ts'/>
/// <reference path='Triangle.ts'/>
var drawShape = function (shape) {
    shape.draw();
};
drawShape(new shapes.Circle());
drawShape(new shapes.Triangle());
