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

  it('Create RECEIVE_POSTS_SUCCESS when fetching posts has been done', () => {
    const expectedBody = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ];
    const userId = 1;

    fetchMock.getOnce(getAPIUrl('posts', userId), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.GET_POSTS_REQUEST, userId: userId },
      { type: types.GET_POSTS_SUCCESS, userId: userId, posts: expectedBody }
    ]

    const store = mockStore({ app: { users: [] }})

    return store.dispatch(actions.fetchPosts(userId))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Create RECEIVE_ALBUMS_SUCCESS when fetching albums has been done', () => {
    const expectedBody = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ];
    const userId = 1;

    fetchMock.getOnce(getAPIUrl('albums', userId), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.GET_ALBUMS_REQUEST, userId: userId },
      { type: types.GET_ALBUMS_SUCCESS, userId: userId, albums: expectedBody }
    ]

    const store = mockStore({ app: { users: [] }})

    return store.dispatch(actions.fetchAlbums(userId))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

});
