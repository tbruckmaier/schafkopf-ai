import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Round from './Round';


class App extends Component {
  constructor(props) {
    var round = new Round();

    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Schafkopf AI</h1>
        </header>
        <section className="content">
          <div className="player player-1">
            <div className="card"></div>
          </div>
          <div className="player player-2">
            <div className="card"></div>
            </div>
          <div className="player player-3">
            <div className="card"></div>
            </div>
          <div className="player player-4">
            <div className="card"></div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
