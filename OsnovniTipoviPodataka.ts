let logical: boolean = true;
let decimalni: number = 9;
let hexadecimalni: number = 0xef04;
let binarni: number = 0b1010;
let oktalni: number =0o556;
let ime: string = "Marko";    
/**
 * Template stringovi
 */
let ulica: string="Laze Nancica"
let broj: number=7;

let anyPromjenjljiva: any = "Any Promjenjljiva";
function mojaFunkcija(parametar:any): void{
    alert(parametar);
}

function ispisi(param1 : boolean, numberParams : number[], param6: string):string{

     let finalString = param1 + " " + typeof(param1) + "<br>";
     for(var i = 0; i< numberParams.length; i++)
     {
        let temp = numberParams[i] + " " + typeof(numberParams[i]) + "<br>";
        finalString += temp;
     }
     
     finalString += param6 + " " + typeof(param6) + "<br>";     
    return finalString;
}

function templateString(param1: string, param2?: number){
    return `Zivim u ulici ${param1} broj ${param2 + 2}.`
}

let telefonskiImenik: [string, number];
telefonskiImenik = ["Marko Markovic", 123456];

enum GodisnjaDoba {Proljece, Ljeto=1, Jesen, Zima};
let dobaGodine: GodisnjaDoba = GodisnjaDoba.Zima;

function tipoviParametara(param1:number, param3 = 3): number{

    return param1 + param3;
}

function destinacije(glavnaDestinacija: string, ...ostaleDestinacije: string[]){
    return "Spisak destinacija: " + glavnaDestinacija + ", " + ostaleDestinacije.join(", ");
}

let spisakDestinacija = destinacije("Pariz","Rim", "Atina", "Budimpesta", "Bec");

/**mojaFunkcija(anyPromjenjljiva); */
let ispisTipova = ispisi(logical, [decimalni,hexadecimalni,binarni, oktalni], ime);
let stringFromTemplate: string = templateString(ulica,broj)
let parametri = `<br> Ukupan zbir elemenata ${tipoviParametara(decimalni)} <br>`
document.body.innerHTML = ispisTipova + stringFromTemplate +"<br>"+ telefonskiImenik + "<br>" + dobaGodine + parametri + spisakDestinacija;