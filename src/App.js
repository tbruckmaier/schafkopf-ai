import React, { Component } from 'react';
import './App.css';
import Round from './Round';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.round = new Round();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Schafkopf AI</h1>
        </header>
        <section className="content">

          {this.state.round.players.map((player, i) => {
            return (
              <div className={"player player-" + i } key={i}>
                <h2 className="name">{player.name} {player.beautifulDran()}</h2>
                <ul className="hand">
                {player.cards.map((card, j) => {

                  let cardDiv;
                  if (player.dran) {
                    cardDiv = (<button onClick={(e) => { player.playCard(card); this.state.round.nextPlayer(); this.forceUpdate()} }>{card.name()}</button>)
                  } else {
                    cardDiv = card.name()
                  }

                  return (<li key={i.toString()+j}>{cardDiv}</li>)
                })}
                </ul>
                <div className={"middle middle-" + i}>{player.getPlayedCardName()}</div>
              </div>
            )
          })}

        </section>
      </div>
    );
  }
}

export default App;
