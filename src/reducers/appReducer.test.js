import reducer from './appReducer';
import * as types from '../constants/actionTypes';
import initialState from './initialState';


describe('Reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_USERS_SUCCESS', () => {
    const users = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette"
      }
    ];

    expect(
      reducer(initialState, {
        type: types.GET_USERS_SUCCESS,
        users: users
      })
    ).toEqual({ app: { users: users }})

    expect(
      reducer({ app: { users: users }}, {
        type: types.GET_USERS_SUCCESS
      })
    ).toEqual(initialState)

    expect(
      reducer({ app: { users: users }}, {
        type: types.GET_USERS_SUCCESS,
        users: []
      })
    ).toEqual(initialState)
  })
})
