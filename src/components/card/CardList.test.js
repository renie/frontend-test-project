import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import CardList from './CardList'

describe('CardList', () => {

  it('Create Component', () => {
    const wrapper = shallow(<CardList users={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
