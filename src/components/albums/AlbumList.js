import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from './Album'
import { fetchAlbums } from '../../actions/actions';
import './albumList.css'

export class AlbumList extends Component {
  componentDidMount() {
    this.props.fetchAlbums(this.props.userId)
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId)
    const albums = user ? user.albums : []

    return (
      <div className="albumListContainer">
        <h3 className="label">Albums:</h3>
        <ul className="albumList">
          {
            albums.map((album, index) => (
              <Album key={album.id} album={album} />
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
  fetchAlbums: userId => dispatch(fetchAlbums(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
