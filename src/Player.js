class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    dealCard(card) {
        this.cards.push(card);
    }
}

export default Player;
