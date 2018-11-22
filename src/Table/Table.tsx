import React, { Component } from "react";
import "./Table.css";
import TeamSide from "../TeamSide/TeamSide";
import Player from "../Player/Player";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

export interface TableProps {
  players: Player[];
}

export interface TableState {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Table extends React.Component<TableProps, TableState> {
  render() {
    let sideA = this.props.players.slice(0, 2);
    let sideB = this.props.players.slice(2, 4);
    return (
      <div className="table">
        <TeamSide players={sideA} side={false} />
        <div className="table-middle">
          <div className="player-icon-wrapper player-icon-wrapper__side-a">
            <PlayerIcon name="John H" active={true} />
            <PlayerIcon name="Stephen D" active={false} />
          </div>
          <div className="player-icon-wrapper player-icon-wrapper__side-b">
            <PlayerIcon name="Colin S" active={false} />
            <PlayerIcon name="Nick A" active={false} />
          </div>
        </div>
        <TeamSide players={sideB} side={true} />
      </div>
    );
  }
}

export default Table;
