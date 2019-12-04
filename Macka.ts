import { Osobine } from "./osobine";
import { Zivotinja } from "./zivotinja";

class Macka extends Zivotinja implements Osobine{

    constructor(name: string) { super(name); }
    kretanje(razdaljina: number): string{
        return `Zivotinja je presla ${razdaljina} metara.<br>`;
    }  
    oglasavanje(): string {
       return "<br> Mjau mjau <br>";
    }
}

var macka = new Macka("Tom");
document.body.innerHTML =  macka.kretanje(10) + macka.oglasavanje();
 