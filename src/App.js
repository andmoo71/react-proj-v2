import React, { Component } from "react";
import CardList from "./CardList";
import { dogs } from "./Dogs.js";
import SearchBox from "./SearchBox";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: dogs,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredDogs = this.state.dogs.filter((dogs) => {
      return dogs.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className='f1' >Serious Business</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList dogs={filteredDogs} />
      </div>
    );
  }
}

export default App;
