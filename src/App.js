import React, { Component } from 'react';
import NotesList from "./components/NotesList"
import SubmitForm from './components/SubmitForm';

class App extends Component {
  render() {
    return ( 
      <section>
        <SubmitForm />
        <NotesList />
      </section>
    )
  }
}

export default App;
