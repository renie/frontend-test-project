import { getAPIUrl } from '../constants/url.js'
import * as types from '../constants/actionTypes.js'


const requestUsers = () => ({ type: types.GET_USERS_REQUEST });
const receiveUsers = users => ({ type: types.GET_USERS_SUCCESS, users });
const errorUsers = error => ({ type: types.GET_USERS_ERROR, error });

export const fetchUsers = () => dispatch => {
  dispatch(requestUsers());

  return fetch(getAPIUrl('users'))
      .then(
        response => response.json(),
        error => dispatch(errorUsers(error))
      )
      .then(
        json => dispatch(receiveUsers(json))
      )
      .catch(
        error => dispatch(errorUsers(error)))
}

const requestPosts = userId => ({ type: types.GET_POSTS_REQUEST, userId: userId });
const receivePosts = (userId, posts) => ({ type: types.GET_POSTS_SUCCESS, userId: userId, posts });
const errorPosts = error => ({ type: types.GET_POSTS_ERROR, error });

export const fetchPosts = userId => dispatch => {
  dispatch(requestPosts(userId));

  return fetch(getAPIUrl('posts', userId))
      .then(
        response => response.json(),
        error => dispatch(errorPosts(error))
      )
      .then(
        json => dispatch(receivePosts(userId, json))
      )
      .catch(
        error => dispatch(errorPosts(error)))
}

const requestAlbums = userId => ({ type: types.GET_ALBUMS_REQUEST, userId: userId });
const receiveAlbums = (userId, albums) => ({ type: types.GET_ALBUMS_SUCCESS, userId: userId, albums });
const errorAlbums = error => ({ type: types.GET_ALBUMS_ERROR, error });

export const fetchAlbums = userId => dispatch => {
  dispatch(requestAlbums(userId));

  return fetch(getAPIUrl('albums', userId))
      .then(
        response => response.json(),
        error => dispatch(errorAlbums(error))
      )
      .then(
        json => dispatch(receiveAlbums(userId, json))
      )
      .catch(
        error => dispatch(errorAlbums(error)))
}
