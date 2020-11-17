import React, { useState } from 'react';
import NotesList from "./components/lists/NotesList";
import AddNoteForm from "./components/forms/AddNoteForm";
import "./assets/App.css"
import "./assets/index.css"

const App = () => {
    const initialFormState = {id: null, title: "", text: ""}
    const [notes, setNotes] = useState([{id: null, title: "", text: ""}]);

    const addNote = (note) => {
      note.id = notes.length + 1;
      setNotes([...notes, note]);
    }

  return (
    <section className="container">
      <h1>My notes</h1>
      <AddNoteForm addNote={addNote}/>
      <NotesList notes={notes}/>
    </section>
  )
}

export default App;