import Deck from './Deck';

class Round {
  constructor() {

    this.deck = new Deck();

    this.deck.shuffle();

    this.players = ['Domi', 'Basi', 'Klaus', 'Thomas'];

    this.playerCards = [[], [], [], []];

    this.deal();

  }

  deal() {
    var playerNum = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            this.playerCards[i % 4].push(this.deck.deal());

        }
    }

  }

}
export default Round;
