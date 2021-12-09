/// <reference path='IShape.ts'/>
namespace shapes{
	export class Circle implements drawing.IShape{
		public draw(){
			console.log('Circle is draw.')
		}
	}
}