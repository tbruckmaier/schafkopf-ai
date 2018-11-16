class Card {
    constructor(id, farbe, schlag) {
        this.id = id;
        this.farbe = farbe;
        this.schlag = schlag;
    }

    name() {
        return `${this.farbe}-${this.schlag}`;
    }
}

export default Card;
