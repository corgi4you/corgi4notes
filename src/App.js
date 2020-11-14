import React, { Component } from 'react';
import NotesList from "./components/NotesList"
import SubmitForm from './components/SubmitForm/SubmitForm';
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
