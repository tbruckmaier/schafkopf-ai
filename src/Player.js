class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.dran = false;
        this.playedCard = false;
    }

    dealCard(card) {
        this.cards.push(card);
    }

    setDran() {
        this.dran = true;
    }

    beautifulDran() {
        return (this.dran ? 'dran' : '');
    }

    playCard (card) {

        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id == card.id) {
                this.cards.splice(i ,1);
            }
        }

        this.playedCard = card;
    }

    getPlayedCardName() {
        if (this.playedCard) {
            return this.playedCard.name();
        }
        return '';
    }
}

export default Player;
