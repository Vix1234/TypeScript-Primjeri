var logical = true;
var decimalni = 9;
var hexadecimalni = 0xef04;
var binarni = 10;
var oktalni = 366;
var ime = "Marko";
/**
 * Template stringovi
 */
var ulica = "Laze Nancica";
var broj = 7;
var anyPromjenjljiva = "Any Promjenjljiva";
function mojaFunkcija(parametar) {
    alert(parametar);
}
function ispisi(param1, numberParams, param6) {
    var finalString = param1 + " " + typeof (param1) + "<br>";
    for (var i = 0; i < numberParams.length; i++) {
        var temp = numberParams[i] + " " + typeof (numberParams[i]) + "<br>";
        finalString += temp;
    }
    finalString += param6 + " " + typeof (param6) + "<br>";
    return finalString;
}
function templateString(param1, param2) {
    return "Zivim u ulici " + param1 + " broj " + (param2 + 2) + ".";
}
var telefonskiImenik;
telefonskiImenik = ["Marko Markovic", 123456];
var GodisnjaDoba;
(function (GodisnjaDoba) {
    GodisnjaDoba[GodisnjaDoba["Proljece"] = 0] = "Proljece";
    GodisnjaDoba[GodisnjaDoba["Ljeto"] = 1] = "Ljeto";
    GodisnjaDoba[GodisnjaDoba["Jesen"] = 2] = "Jesen";
    GodisnjaDoba[GodisnjaDoba["Zima"] = 3] = "Zima";
})(GodisnjaDoba || (GodisnjaDoba = {}));
;
var dobaGodine = GodisnjaDoba;
.3;
function tipoviParametara(param1, param3) {
    if (param3 === void 0) { param3 = 3; }
    return param1 + param3;
}
function destinacije(glavnaDestinacija) {
    var ostaleDestinacije = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ostaleDestinacije[_i - 1] = arguments[_i];
    }
    return "Spisak destinacija: " + glavnaDestinacija + ", " + ostaleDestinacije.join(", ");
}
var spisakDestinacija = destinacije("Pariz", "Rim", "Atina", "Budimpesta", "Bec");
/**mojaFunkcija(anyPromjenjljiva); */
var ispisTipova = ispisi(logical, [decimalni, hexadecimalni, binarni, oktalni], ime);
var stringFromTemplate = templateString(ulica, broj);
var parametri = "<br> Ukupan zbir elemenata " + tipoviParametara(decimalni) + " <br>";
document.body.innerHTML = ispisTipova + stringFromTemplate + "<br>" + telefonskiImenik + "<br>" + dobaGodine + parametri + spisakDestinacija;
