import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table/Table";
import Player from "./Player/Player";

class App extends Component {
  render() {
    let player: Player[] = [
      new Player("1", "John"),
      new Player("2", "Nick"),
      new Player("3", "Colin"),
      new Player("4", "Stephen")
    ];
    return (
      <div className="App">
        <Table players={player} />
      </div>
    );
  }
}

export default App;
