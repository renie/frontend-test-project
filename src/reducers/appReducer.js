import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        app: {
          users: action.users ? action.users.map(user => ({...user, posts: [], albums: []})) : []
        }
      }

    case types.GET_POSTS_SUCCESS:
      const posts = action.posts ? action.posts : []

      return {
        app: {
          users: state.app.users.map(user => {
            return user.id === action.userId ? {...user, posts} : {...user}
          })
        }
      }

    case types.GET_ALBUMS_SUCCESS:
      const albums = action.albums ? action.albums : []

      return {
        app: {
          users: state.app.users.map(user => {
            return user.id === action.userId ? {...user, albums} : {...user}
          })
        }
      }

    default:
      return state;
  }
}
