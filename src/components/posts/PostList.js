import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'
import { fetchPosts } from '../../actions/actions';
import './postList.css'

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.userId)
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId)
    const posts = user ? user.posts : []

    return (
      <div className="postListContainer">
        <h3 className="label">Posts:</h3>
        <ul className="postList">
          {
            posts.map((post, index) => (
              <Post key={post.id} post={post} userId={user.id} />
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.appReducer.app.users
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: userId => dispatch(fetchPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
