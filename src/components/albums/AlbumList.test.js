import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import fetchMock from 'fetch-mock';
import { AlbumList } from './AlbumList'
import { fetchAlbums } from '../../actions/actions';
import { getAPIUrl } from '../../constants/url.js';


const mockStore = configureMockStore([thunk])

describe('AlbumList', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('Create Component', () => {
    const expectedBody = [];
    const store = mockStore({ app: { users: [] }})
    const mockfetchAlbum = () => store.dispatch(fetchAlbums(id))
    const id = 1

    fetchMock.getOnce(getAPIUrl('albums', id), {
      body: expectedBody,
      headers: { 'content-type': 'application/json' }
    })

    const wrapper = shallow(<AlbumList store={store} fetchAlbums={mockfetchAlbum} userId={id} users={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
