import reducer from './appReducer'
import * as types from '../constants/actionTypes'
import initialState from './initialState'


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
    ]

    const usersComplete = users.map(user=>({...user, posts: [], albums: []}))

    expect(
      reducer(initialState, {
        type: types.GET_USERS_SUCCESS,
        users: users
      })
    ).toEqual({ app: { users: usersComplete }})

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

  it('should handle GET_POSTS_SUCCESS', () => {
    const posts = [
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
    const initialStateWithUsers = { app: { users: [{ "id": 1, "posts": []}] } }
    const initialStateWithUsersAndPosts = { app: { users: [{ "id": 1, "posts": posts}] } }

    expect(
      reducer(initialStateWithUsers, {
        type: types.GET_POSTS_SUCCESS,
        posts: posts,
        userId: 1
      })
    ).toEqual(initialStateWithUsersAndPosts)

    expect(
      reducer(initialStateWithUsers, {
        type: types.GET_POSTS_SUCCESS
      })
    ).toEqual(initialStateWithUsers)

    expect(
      reducer(initialStateWithUsersAndPosts, {
        type: types.GET_POSTS_SUCCESS,
        posts: [],
        userId: 1
      })
    ).toEqual(initialStateWithUsers)
  })

  it('should handle GET_ALBUMS_SUCCESS', () => {
    const albums = [
      {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      }
    ];
    const initialStateWithUsers = { app: { users: [{ "id": 1, "albums": []}] } }
    const initialStateWithUsersAndAlbums = { app: { users: [{ "id": 1, "albums": albums}] } }

    expect(
      reducer(initialStateWithUsers, {
        type: types.GET_ALBUMS_SUCCESS,
        albums: albums,
        userId: 1
      })
    ).toEqual(initialStateWithUsersAndAlbums)

    expect(
      reducer(initialStateWithUsers, {
        type: types.GET_ALBUMS_SUCCESS
      })
    ).toEqual(initialStateWithUsers)

    expect(
      reducer(initialStateWithUsersAndAlbums, {
        type: types.GET_ALBUMS_SUCCESS,
        albums: [],
        userId: 1
      })
    ).toEqual(initialStateWithUsers)
  })
})
