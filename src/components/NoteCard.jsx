import React, { Component } from 'react';

class NoteCard extends Component {
    state = {  }
    render() { 
        return (
          <section>
            <header>
              <h3>Título da nota</h3>
            </header>
            <p>Conteúdo da nota</p>
          </section>
        );
    }
}
 
export default NoteCard;