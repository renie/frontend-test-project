import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        app: {
          users: action.users ? action.users : []
        }
      }

    default:
      return state;
  }
}
