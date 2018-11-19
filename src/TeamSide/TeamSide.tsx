import React, { Component } from "react";
import "./TeamSide.css";
import Cup from "../Cup/Cup";
import Player from "../Player/Player";

export interface TeamSideProps {
  side: boolean;
  players: Player[];
}

const TeamSide = (props: TeamSideProps) => (
  <div
    className="team-side"
    style={props.side ? { transform: "rotateX(180deg)" } : {}}
  >
    <div className="cup-row" style={props.side ? { transform: "rotateX(180deg)", zIndex: 4  } : {}}>
      <Cup player="" />
      <Cup player="" />
      <Cup player="" />
      <Cup player="" />
    </div>
    <div className="cup-row" style={props.side ? { transform: "rotateX(180deg)", zIndex: 3  } : {}}>
      <Cup player="" />
      <Cup player="" />
      <Cup player="" />
    </div>
    <div className="cup-row"style={props.side ? { transform: "rotateX(180deg)", zIndex: 2  } : {}}>
      <Cup player="" />
      <Cup player="" />
    </div>
    <div className="cup-row"style={props.side ? { transform: "rotateX(180deg)", zIndex: 1 } : {}}>
      <Cup player="" />
    </div>
  </div>
);

export default TeamSide;
