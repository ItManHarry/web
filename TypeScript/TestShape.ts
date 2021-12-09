/// <reference path='IShape.ts'/>
/// <reference path='Circle.ts'/>
/// <reference path='Triangle.ts'/>
var drawShape = (shape:drawing.IShape) => {
	shape.draw()
}
drawShape(new shapes.Circle())
drawShape(new shapes.Triangle())