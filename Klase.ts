class Kvadrat{
    stranica: number;
    constructor(stranica: number){
        this.stranica = stranica;
    }

    povrsina(){
        return "Povrsina je: " + Math.pow(this.stranica, 2) + "<br>";
    }
}

let kvadratImplementacija = new Kvadrat(5);

//nasledjivanje
class Zivotinja {
    kretanje(razdaljina: number){
        return `Zivotinja je presla ${razdaljina} metara.<br>`;
    }  
}

class Pas extends Zivotinja {
  
   oglasavanje(){
       return "<br> Av av <br>";
   }
}

let pas = new Pas();
let a = pas.oglasavanje()
let b = pas.kretanje(10);

//Nasledjivanje 2
class Animal {
    protected name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Cat extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Walking...");
        super.move(distanceInMeters);
    }
}

class Bird extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Flying...");
        super.move(distanceInMeters);
    }
    name = "parrot";
}

let cat = new Cat("Garfield");
let tweety: Animal = new Bird("Tweety");
//new Animal("Tom").name;
cat.move();
tweety.move(34);



document.body.innerHTML = kvadratImplementacija.povrsina() + a + b;