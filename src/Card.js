class Card {
    constructor(farbe, schlag) {
        this.farbe = farbe;
        this.schlag = schlag;
    }

    name() {
        return `${this.farbe}-${this.schlag}`;
    }
}

export default Card;
