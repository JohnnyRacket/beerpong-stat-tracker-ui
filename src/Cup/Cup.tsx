import React, { Component } from "react";
import "./Cup.css";
import cup from "./solocup.svg";

export interface CupProps {
  player: string;
}

const Cup = (props: CupProps) => (
  <div className="cup">
    <img className="cup-img" src={cup} />
  </div>
);

export default Cup;
