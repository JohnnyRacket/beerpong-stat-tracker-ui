import React, { Component } from "react";
import "./Table.css";
import TeamSide from "../TeamSide/TeamSide";
import Player from "../Player/Player";

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
        <div className="table-middle" />
        <TeamSide players={sideB} side={true} />
      </div>
    );
  }
}

export default Table;
