import React from "react";
import "./ToDo.css";
import ToDoData from "./ToDoData";
import { bos1, kerk, maritjies, pearlybeach } from "../assets";
function ToDo() {
  return (
    <div className="todocontainer">
      <h1>Places to visit near us</h1>
      <p>Some of the place you can visit near Suikerbekkie:</p>

      <div className="todoCardContainer">
        <ToDoData
          image={maritjies}
          heading={"Maritjies Pub"}
          paragraph={
            "Come have some wondeful food at Maritjies just a walk away!"
          }
        />
        <ToDoData
          image={pearlybeach}
          heading={"Pearly Beach"}
          paragraph={
            "Have a nice swim at Pearly Beach 10km away from Suikerbekkie"
          }
        />
        <ToDoData
          image={kerk}
          heading={"Church"}
          paragraph={"Situated behind a beautiful Church!"}
        />
      </div>
    </div>
  );
}
// #Maritjies,Kerk,Pealy Beach

export default ToDo;
