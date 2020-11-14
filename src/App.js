import React, { Component } from 'react';
import NotesList from "./components/NotesList/index"
import SubmitForm from './components/SubmitForm/index';
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
  render() {
    return ( 
      <section className="content">
        <SubmitForm />
        <NotesList />
      </section>
    )
  }
}

export default App;
