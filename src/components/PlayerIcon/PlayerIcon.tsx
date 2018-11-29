import React, { Component } from "react";
import "./PlayerIcon.css";
import playerselectedsvg from "./player-selected.svg";
import playerunselectedsvg from "./player-unselected.svg";

export interface PlayerIconProps {
  name: string;
  active: boolean;
}

const PlayerIcon = (props: PlayerIconProps) => (
  <div className="player-icon-text-wrapper">
    <img className="player-icon" src={props.active ? playerselectedsvg : playerunselectedsvg} />
    <div className="player-icon-text">{props.name.split(' ')[0].charAt(0) + props.name.split(' ')[1].charAt(0)}</div>
  </div>

);

export default PlayerIcon;
