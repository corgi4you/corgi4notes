import React, { Component } from "react";

class SubmitForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default SubmitForm;
