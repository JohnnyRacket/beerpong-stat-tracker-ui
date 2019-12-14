import React, { Component } from "react";
import "./Table.css";
import Player from "../Player/Player";
import PlayerIcon from "../PlayerIcon/PlayerIcon";
import Cup from "../Cup/Cup";

export interface TableProps {
  players: Player[];
}

export interface TableState { }

export class Table extends React.Component<TableProps, TableState> {
  render() {
    let sideA = this.props.players.slice(0, 2);
    let sideB = this.props.players.slice(2, 4);
    return (
      <div className="table">

        <div
          className="team-side"
          style={{ background: '#218c74' }}
        >
          <div className="cup-row" >
            <Cup player="" />
            <Cup player="" />
            <Cup player="" />
            <Cup player="" />
          </div>
          <div className="cup-row" >
            <Cup player="" />
            <Cup player="NA" />
            <Cup player="" />
          </div>
          <div className="cup-row">
            <Cup player="CS" />
            <Cup player="" />
          </div>
          <div className="cup-row">
            <Cup player="" />
          </div>
        </div>


        <div className="table-middle">
          <div className="player-icon-wrapper player-icon-wrapper__side-a">
            <PlayerIcon name="John H" active={true} />
            <PlayerIcon name="Stephen D" active={false} />
          </div>
          <div style={{ zIndex: 5, marginBottom: '8px', color: 'white', fontWeight: 'bold', fontSize: '2rem', alignSelf: 'center' }}>vs.</div>
          <div className="player-icon-wrapper player-icon-wrapper__side-b">
            <PlayerIcon name="Colin S" active={false} />
            <PlayerIcon name="Nick A" active={false} />
          </div>
        </div>


        <div
          className="team-side"
          style={{ transform: "rotateX(180deg)", background: '#319c84' }}
        >
          <div className="cup-row" style={{ transform: "rotateX(180deg)", zIndex: 4 }}>
            <Cup player="" />
            <Cup player="JH" />
            <Cup player="" />
            <Cup player="" />
          </div>
          <div className="cup-row" style={{ transform: "rotateX(180deg)", zIndex: 3 }}>
            <Cup player="" />
            <Cup player="" />
            <Cup player="" />
          </div>
          <div className="cup-row" style={{ transform: "rotateX(180deg)", zIndex: 2 }}>
            <Cup player="JH" />
            <Cup player="" />
          </div>
          <div className="cup-row" style={{ transform: "rotateX(180deg)", zIndex: 1 }}>
            <Cup player="" />
          </div>
        </div>

      </div>
    );
  }
}

export default Table;
