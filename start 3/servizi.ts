abstract class Lavoratore {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    getUtileTasse(): number {
        return Math.floor(this.redditoannuolordo * this.codredd / 100);
    }
    getTasseInps(): number {
        return Math.floor(this.getUtileTasse() * this.tasseinps / 100);
    }
    getTasseIrpef(): number {
        return Math.floor(this.getUtileTasse() * this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto(): number {
        return Math.floor(this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()));
    }
}


// PROFESISONISTA

class Professionista extends Lavoratore {
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
    }
}

var redditoProfessionista = Math.floor(Math.random() * (5000 - 3500) + 3500);

function redditoP():any {
    return `👤Questo è il reddito del Professionista: ${redditoProfessionista}`;
}

console.log(redditoP());

let professionista = new Professionista(78, redditoProfessionista, 25.72, 5);
console.log(professionista.getUtileTasse());
console.log(professionista.getTasseInps());
console.log(professionista.getTasseIrpef());
console.log(professionista.getRedditoAnnuoNetto());


// ARTIGIANO

class Artigiano extends Lavoratore {
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
    }
}

var redditoArtigiano = Math.floor(Math.random() * (2000 - 1200) + 1200);

function redditoA():any {
    return `👤Questo è il reddito del Artigiano: ${redditoArtigiano}`;
}

console.log(redditoA());

let artigiano = new Artigiano(67, redditoArtigiano, 35, 15);
console.log(artigiano.getUtileTasse());
console.log(artigiano.getTasseInps());
console.log(artigiano.getTasseIrpef());
console.log(artigiano.getRedditoAnnuoNetto());


// COMMERCIANTE

class Commerciante extends Lavoratore {
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
    }
}

var redditoCommerciante = Math.floor(Math.random() * (3000 - 2200) + 2200);

function redditoC():any {
    return `👤Questo è il reddito del Commerciante: ${redditoCommerciante}`;
}

console.log(redditoC());


let commerciante = new Commerciante(40, redditoCommerciante, 35, 15);
console.log('TABELLA TASSE')
console.table([['Utile Tasse', commerciante.getUtileTasse()], ['Tasse Inds', commerciante.getTasseInps()], ['Tasse Irpef', commerciante.getTasseIrpef()]]);
console.log('Reddito annuo netto: ',commerciante.getRedditoAnnuoNetto());