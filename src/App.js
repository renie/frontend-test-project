import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to your Dashboard!</h1>
        <code>Good luck :)</code>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps, null)(App);