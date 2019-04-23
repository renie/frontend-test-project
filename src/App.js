import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import CardList from './components/card/CardList'
import { fetchUsers } from './actions/actions'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {users: []}
    this.toggleCardBinded = this.toggleCard.bind(this)
  }

  addHiddenPropertyToUsers(users) {
    return users.map(user => ({...user, isHidden: false}))
  }

  toggleCard(userId) {
    this.setState({
      users: this.state.users.map(user => {
        if (user.id !== userId)
          return user

        const newUser = {...user}
        newUser.isHidden = !newUser.isHidden
        return newUser
      })
    })
  }

  componentDidMount() {
    this.props
      .fetchUsers()
      .then(action => {
        this.setState({
          users: this.addHiddenPropertyToUsers(action.users)
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to your Dashboard!</h1>
        <code>Good luck :)</code>
        <CardList users={this.state.users} toggleCard={this.toggleCardBinded}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.appReducer.app.users,
  lastRefresh: state.appReducer.app.lastRefresh
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
