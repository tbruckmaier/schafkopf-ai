import Deck from './Deck';
import Player from './Player';

class Round {
  constructor() {

    this.deck = new Deck();

    this.deck.shuffle();

    this.players = [
        new Player('Domi'),
        new Player('Basi'),
        new Player('Klaus'),
        new Player('Thomas')
    ];

    this.deal();

  }

  deal() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            this.players[i % 4].dealCard(this.deck.deal());
        }
    }
  }

  getPlayerByPosition (position) {
    return this.players[position].name;
  }

}
export default Round;
