import React, { useState } from 'react'
import "./styles.css";

const NoteCard = (props) => {
    return (
        <section className="note-card">
            <header className="note-card_header">
                <h3 className="note-card_title">{props.title}</h3>
            </header>
            <p className="note-card_text">{props.text}</p>
        </section>
    )
}

export default NoteCard;