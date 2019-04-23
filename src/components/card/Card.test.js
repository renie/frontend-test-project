import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import { shallow } from 'enzyme';

describe('Card', () => {
  it('Create Component', () => {
    const user = {
      id: 10,
      name: 'John Dalton',
      email: 'j.dalton@company.com',
      company: {
        name: 'Huuuuge company'
      }
    }

    const wrapper = shallow(<Card user={user} />);

    expect(wrapper).toMatchSnapshot();
  });
});
