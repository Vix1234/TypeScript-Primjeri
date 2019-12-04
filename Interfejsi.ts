//Interfejs
interface imeOsobe {
    ime: string;
}

function ispisiIme( imeParam: imeOsobe):string{
    return "Ime osobe je : " + imeParam.ime;
}

let Osoba ={godine: 20, ime: "Aleksandar"};
let imeOsobe: string = ispisiIme(Osoba);

//Opcioni parametri
interface Kvadrat {
    boja?: string;
    stranica?: number;
}

function kreirajKvadrat(parametri: Kvadrat): {boja:string, povrsina: number} {
    let noviKvadrat = {boja:"crvena", povrsina: 100};
    if(parametri.boja){
        noviKvadrat.boja = parametri.boja;
    }
    if (parametri.stranica) {
        noviKvadrat.povrsina = Math.pow(parametri.stranica, 2);
    }
    return noviKvadrat;
}

let mojKvadrat = kreirajKvadrat({stranica:5});
let kvadrat = "<br> Povrsina kvadrata je: " + mojKvadrat.povrsina + " ,boja:" + mojKvadrat.boja + "<br>";

//readonly 
interface Pravougaonik{
    readonly a:number;
    readonly b: number;
}

let pravougaonik : Pravougaonik = {a:5, b:3};
//pravougaonik.a = 6

//metoda
interface krug{
    (a: number):number;
}

let mojKrug : krug;
mojKrug = function(r: number):number{
    return Math.pow(r, 2) * Math.PI;
}

//Implements
interface SatInterfejs {
    trenutnoVrijeme: Date;
    postaviVrijeme(d: Date): void;
}

class Sat implements SatInterfejs {
    trenutnoVrijeme: Date = new Date();
    postaviVrijeme(d: Date) {
        this.trenutnoVrijeme = d;
    }
    constructor(h: number, m: number) { }
}

let sat = new Sat(10,24);
let trenutnoVrijeme = "<br> Trenutno vrijeme je: " + sat.trenutnoVrijeme + ".<br>";

//Extending
interface Oblik {
    boja: string;
}

interface Olovka{
    penWidth: number;
}

interface Kvadrat1 extends Oblik, Olovka {
    duzinaStrane: number;
}

let square = <Kvadrat1>{};
square.boja = "blue";
square.duzinaStrane = 10;
square.penWidth = 5.0;
let osobineKvadrata = "<br> Olovka: " + square.penWidth + " Boja: " + square.boja + " Duzina stranice: " + square.duzinaStrane + " <br>";

//Extend klase
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}


document.body.innerHTML = imeOsobe + kvadrat + trenutnoVrijeme + osobineKvadrata;



