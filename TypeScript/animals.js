var animals;
(function (animals) {
    var skyanimal;
    (function (skyanimal) {
        var Angle = /** @class */ (function () {
            function Angle() {
            }
            Angle.prototype.fly = function () {
                console.log('Angle is flying ...');
            };
            return Angle;
        }());
        skyanimal.Angle = Angle;
    })(skyanimal = animals.skyanimal || (animals.skyanimal = {}));
    var landanimal;
    (function (landanimal) {
        var Tiger = /** @class */ (function () {
            function Tiger() {
            }
            Tiger.prototype.run = function () {
                console.log('Tiger is runing ...');
            };
            return Tiger;
        }());
        landanimal.Tiger = Tiger;
    })(landanimal = animals.landanimal || (animals.landanimal = {}));
    var wateranimal;
    (function (wateranimal) {
        var Fish = /** @class */ (function () {
            function Fish() {
            }
            Fish.prototype.swim = function () {
                console.log('Fish is swimming...');
            };
            return Fish;
        }());
        wateranimal.Fish = Fish;
    })(wateranimal = animals.wateranimal || (animals.wateranimal = {}));
})(animals || (animals = {}));
/// <reference path = 'Animals.ts'/>
var angle = new animals.skyanimal.Angle();
var tiger = new animals.landanimal.Tiger();
var fish = new animals.wateranimal.Fish();
angle.fly();
tiger.run();
fish.swim();
