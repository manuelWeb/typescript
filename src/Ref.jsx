import React from 'react'

class RefFocus extends React.Component {
  constructor(props) {
    super(props);
    // Crée une référence pour stocker l’élément DOM textInput
    this.textInput = React.createRef();
    this.checkInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.focusCheckInput = this.focusCheckInput.bind(this);
  }

  focusTextInput() {
    // Donne explicitement le focus au champ texte en utilisant l’API DOM native.
    // Remarque : nous utilisons `current` pour cibler le nœud DOM
    this.textInput.current.focus();
  }
  focusCheckInput() {
    // Donne explicitement le focus au champ texte en utilisant l’API DOM native.
    // Remarque : nous utilisons `current` pour cibler le nœud DOM
    this.checkInput.current.checked = true;
  }
  render() {
    return (
      <div>
        <br />
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Donner le focus au champ texte"
          onClick={this.focusTextInput}
        />
        <br />
        <br />
        <input
          type="checkbox"
          ref={this.checkInput} />
        <input
          type="button"
          value="Donner le focus à la checkbox ?"
          onClick={this.focusCheckInput}
        />
      </div>
    )
  }
}

export default RefFocus;