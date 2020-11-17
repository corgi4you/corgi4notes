import React, { useState } from 'react';
import "./styles.css";

const AddNoteForm = (props) => {
    const initialFormState = { id: null, title: '', text: '' }
    const [note, setNote] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNote({ ...note, [name]: value});
    }    

    return (
        <div className="submit-form_container">
            <form className="submit-form"
                onSubmit={event => {
                    event.preventDefault();
                    if(!note.title || !note.text) return

                    console.log(event);
                    props.addNote(note);
                    setNote(initialFormState);
                }}
            >
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    className="submit-form_input"
                    onChange={handleInputChange}
                />
                <label>Text</label>
                <textarea
                    rows={15}
                    name="text"
                    className="submit-form_input"
                    value={note.text}
                    onChange={handleInputChange}
                />
                <button className="submit-form_input submit-form_submit">
                    Add new note
                </button>
            </form>
        </div>
    )
}

export default AddNoteForm;