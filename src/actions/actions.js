import { getAPIUrl } from '../constants/url.js'
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../constants/actionTypes.js'


const requestUsers = () => ({ type: GET_USERS_REQUEST });
const receiveUsers = users => ({ type: GET_USERS_SUCCESS, users });
const errorUsers = error => ({ type: GET_USERS_ERROR, error });

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
