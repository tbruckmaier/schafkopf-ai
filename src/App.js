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
                <h2 className="name">{player.name}</h2>
                <ul>
                {player.cards.map((card, j) => {
                  return (<li key={i.toString()+j}>{card.name()}</li>)
                })}
                </ul>
              </div>)
          })}
        </section>
      </div>
    );
  }
}

export default App;
