import React, { Component } from 'react';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    )
  }
}

export default App;