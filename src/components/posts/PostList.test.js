import React from 'react'
import ReactDOM from 'react-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import { PostList } from './PostList'
import { fetchPosts } from '../../actions/actions'
import { getAPIUrl } from '../../constants/url.js'


const mockStore = configureMockStore([thunk])

describe('PostList', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('Create Component', () => {
    const expectedBody = [];
    const store = mockStore({ app: { users: [] }})
    const mockfetchPost = () => store.dispatch(fetchPosts(id))
    const id = 1

    fetchMock.getOnce(getAPIUrl('posts', id), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const wrapper = shallow(<PostList store={store} fetchPosts={mockfetchPost} userId={id} users={[]} />)

    expect(wrapper).toMatchSnapshot();
  })
})
