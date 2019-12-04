"use strict";
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
exports.__esModule = true;
var zivotinja_1 = require("./zivotinja");
var Macka = /** @class */ (function (_super) {
    __extends(Macka, _super);
    function Macka(name) {
        return _super.call(this, name) || this;
    }
    Macka.prototype.kretanje = function (razdaljina) {
        return "Zivotinja je presla " + razdaljina + " metara.<br>";
    };
    Macka.prototype.oglasavanje = function () {
        return "<br> Mjau mjau <br>";
    };
    return Macka;
}(zivotinja_1.Zivotinja));
var macka = new Macka("Tom");
document.body.innerHTML = macka.kretanje(10) + macka.oglasavanje();
