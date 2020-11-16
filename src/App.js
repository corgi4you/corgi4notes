import React, { useState } from 'react';
import NotesList from "./components/lists/NotesList";
import AddNoteForm from "./components/forms/AddNoteForm";
import "./assets/App.css"
import "./assets/index.css"

const App = () => {
  const [notes, setNotes] = useState([{id: null, title: "", text: ""}]);
  const initialFormState = {id: null, title: "", text: ""}

  const addNote = (note) => {
    note.id = notes.length + 1;
    console.log(notes.length);
    setNotes([...notes, note]);
    console.log(notes);
  }

  return (
    <section className="content">
      <h1>Notes</h1>
      <AddNoteForm addNote={addNote}/>
      <NotesList notes={notes} />
    </section>
  )
}

export default App;