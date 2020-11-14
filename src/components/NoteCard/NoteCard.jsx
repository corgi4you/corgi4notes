import React, { Component } from 'react';
import "./styles.css";

class NoteCard extends Component {
    state = {  }
    render() { 
        return (
          <section className="note-card">
            <header className="note-card_header">
              <h3 className="note-card_title">Título da nota</h3>
            </header>
            <p className="note-card_text">Conteúdo da nota</p>
          </section>
        );
    }
}
 
export default NoteCard;