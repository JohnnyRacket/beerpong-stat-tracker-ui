import React, { Component } from "react";
import "./Cup.css";
import cup from "./red-cup-xl.svg";
import greycup from "./dark-grey-cup-xl.svg";

export interface CupProps {
  player: string;
}

const Cup = (props: CupProps) => (
  <div className="cup">
    <img className="cup-img" src={!props.player ? cup : greycup} />
    <div className="cup-text">{props.player}</div>
  </div>
);

export default Cup;
