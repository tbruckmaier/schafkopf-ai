import Card from './Card';

class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Eichel', 'Gras', 'Herz', 'Schellen'];
    const values = ['Ass', 'König', 'Ober', 'Unter', 10, 9, 8, 7];

    let i = 0;

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(new Card(i, suits[suit], values[value]));
        i += 1;
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.pop();
  }
}

export default Deck;
