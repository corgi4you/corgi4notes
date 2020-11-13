import React, { Component } from "react";
import NoteCard from "./NoteCard";

class NotesList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
            return(
                <li>
                    <div>{categoria}</div>
                    <NoteCard/>
                </li>
            );
        })}
      </ul>
    );
  }
}

export default NotesList;
