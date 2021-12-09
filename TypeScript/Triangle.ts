/// <reference path='IShape.ts'/>
namespace shapes{
	export class Triangle implements drawing.IShape{
		public draw(){
			console.log('Triangle is draw.')
		}
	}
}