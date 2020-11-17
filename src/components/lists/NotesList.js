import React, { useState } from 'react';
import NoteCard from "../cards/NoteCard"
import "./styles.css";

const NotesList = (props) => {
    return (
        <div className="notes-list_container">
            <ul className="notes-list">
                {props.notes.length > 0 ? (
                    props.notes.map((note) => 
                        <li className="notes-list_item" key={note.id}>
                            <NoteCard title={note.title} text={note.text}/>
                        </li>
                    )
                ) : (
                    <div>
                        <p>No notes added yet.</p>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default NotesList;