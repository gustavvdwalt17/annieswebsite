import { bos1 } from "../assets";
import "./ToDo.css";

import React from "react";

function ToDoData(props) {
  return (
    <div className="dotoCard">
      <div className="todoImg">
        <img src={props.image}></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default ToDoData;
