var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kvadrat = /** @class */ (function () {
    function Kvadrat(stranica) {
        this.stranica = stranica;
    }
    Kvadrat.prototype.povrsina = function () {
        return "Povrsina je: " + Math.pow(this.stranica, 2) + "<br>";
    };
    return Kvadrat;
}());
var kvadratImplementacija = new Kvadrat(5);
//nasledjivanje
var Zivotinja = /** @class */ (function () {
    function Zivotinja() {
    }
    Zivotinja.prototype.kretanje = function (razdaljina) {
        return "Zivotinja je presla " + razdaljina + " metara.<br>";
    };
    return Zivotinja;
}());
var Pas = /** @class */ (function (_super) {
    __extends(Pas, _super);
    function Pas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pas.prototype.oglasavanje = function () {
        return "<br> Av av <br>";
    };
    return Pas;
}(Zivotinja));
var pas = new Pas();
var a = pas.oglasavanje();
var b = pas.kretanje(10);
//Nasledjivanje 2
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Walking...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Cat;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        var _this = _super.call(this, name) || this;
        _this.name = "parrot";
        return _this;
    }
    Bird.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Flying...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Bird;
}(Animal));
var cat = new Cat("Garfield");
var tweety = new Bird("Tweety");
//new Animal("Tom").name;
cat.move();
tweety.move(34);
document.body.innerHTML = kvadratImplementacija.povrsina() + a + b;
