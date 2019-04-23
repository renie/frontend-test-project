import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getAPIUrl } from './constants/url.js';
import { fetchUsers } from './actions/actions';


const mockStore = configureMockStore([thunk])

describe('APP', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('renders without crashing', () => {
    const expectedBody = [];
    const store = mockStore({ app: { users: [] }})
    const mockfetchUsers = () => store.dispatch(fetchUsers())

    fetchMock.getOnce(getAPIUrl('users'), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const wrapper = shallow(<App store={store} fetchUsers={mockfetchUsers} />);

    expect(wrapper).toMatchSnapshot();
  });
})
