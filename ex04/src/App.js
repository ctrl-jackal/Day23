import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        firstName: "Lary",
        lastName: "Page",
      },
      {
        firstName: "Ada",
        lastName: "Lovelace",
      },
      {
        firstName: "Alan",
        lastName: "Turing",
      },
    ],
  };

  //Method for removing characters from list or array
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        // working in same manner without block bcs it has one line
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
