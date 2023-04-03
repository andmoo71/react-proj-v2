import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ dogs: users });
      });
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
    if (this.state.dogs.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Serious Business</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList dogs={filteredDogs} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
