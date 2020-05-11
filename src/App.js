import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";
import Scroll from "./components/scroll/Scroll";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

import { searchRobots } from "./Reducer";

import "./App.css";

const store = createStore(searchRobots);

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <Provider store={store}>
        !robots.length ? (<h1 className="tc">Loading</h1>) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
        );
      </Provider>
    );
  }
}

export default App;
