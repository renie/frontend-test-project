import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'
import { shallow } from 'enzyme'

describe('Post', () => {
  it('Create Component', () => {
    const post = { title: 'Some pretty good title!'}
    const wrapper = shallow(<Post post={post} />)

    expect(wrapper).toMatchSnapshot()
  })
})
