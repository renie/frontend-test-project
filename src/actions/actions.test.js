import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import * as actions from '../actions/actions';
import * as types from '../constants/actionTypes';
import { getAPIUrl } from '../constants/url.js';


const mockStore = configureMockStore([thunk])

describe('Actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('Create RECEIVE_USERS_SUCCESS when fetching users has been done', () => {
    const expectedBody = [
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

    fetchMock.getOnce(getAPIUrl('users'), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.GET_USERS_REQUEST },
      { type: types.GET_USERS_SUCCESS, users: expectedBody }
    ]

    const store = mockStore({ app: { users: [] }})

    return store.dispatch(actions.fetchUsers())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

});
