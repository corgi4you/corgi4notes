import React, { Component } from "react";
import "./styles.css";

class SubmitForm extends Component {
  render() {
    return (
      <form className="submit-form">
        <input type="text" placeholder="Título" className="submit-form_input" />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="submit-form_input"
        />
        <button className="submit-form_input submit-form_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default SubmitForm;
