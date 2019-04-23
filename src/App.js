import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from './components/card/CardList';
import { fetchUsers } from './actions/actions';

export class App extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to your Dashboard!</h1>
        <code>Good luck :)</code>
        <CardList users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.appReducer.app.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
