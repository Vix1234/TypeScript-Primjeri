function ispisiIme(imeParam) {
    return "Ime osobe je : " + imeParam.ime;
}
var Osoba = { godine: 20, ime: "Aleksandar" };
var imeOsobe = ispisiIme(Osoba);
function kreirajKvadrat(parametri) {
    var noviKvadrat = { boja: "crvena", povrsina: 100 };
    if (parametri.boja) {
        noviKvadrat.boja = parametri.boja;
    }
    if (parametri.stranica) {
        noviKvadrat.povrsina = Math.pow(parametri.stranica, 2);
    }
    return noviKvadrat;
}
var mojKvadrat = kreirajKvadrat({ stranica: 5 });
var kvadrat = "<br> Povrsina kvadrata je: " + mojKvadrat.povrsina + " ,boja:" + mojKvadrat.boja + "<br>";
var pravougaonik = { a: 5, b: 3 };
var mojKrug;
mojKrug = function (r) {
    return Math.pow(r, 2) * Math.PI;
};
var Sat = /** @class */ (function () {
    function Sat(h, m) {
        this.trenutnoVrijeme = new Date();
    }
    Sat.prototype.postaviVrijeme = function (d) {
        this.trenutnoVrijeme = d;
    };
    return Sat;
}());
var sat = new Sat(10, 24);
var trenutnoVrijeme = "<br> Trenutno vrijeme je: " + sat.trenutnoVrijeme + ".<br>";
var square = {};
square.boja = "blue";
square.duzinaStrane = 10;
square.penWidth = 5.0;
var osobineKvadrata = "<br> Olovka: " + square.penWidth + " Boja: " + square.boja + " Duzina stranice: " + square.duzinaStrane + " <br>";
document.body.innerHTML = imeOsobe + kvadrat + trenutnoVrijeme + osobineKvadrata;
