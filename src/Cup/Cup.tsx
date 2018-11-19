import React, { Component } from "react";
import "./Cup.css";
import cup from "./red-cup-xl.svg";

export interface CupProps {
  player: string;
}

const Cup = (props: CupProps) => (
  <div className="cup">
    <img className="cup-img" src={cup} />
  </div>
);

export default Cup;
