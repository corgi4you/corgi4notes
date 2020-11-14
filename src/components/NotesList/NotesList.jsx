import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./styles.css";

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
            return(
                <li key={index} className="notes-list_item">
                    <NoteCard/>
                </li>
            );
        })}
      </ul>
    );
  }
}

export default NotesList;
