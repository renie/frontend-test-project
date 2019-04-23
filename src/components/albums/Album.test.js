import React from 'react'
import ReactDOM from 'react-dom'
import Album from './Album'
import { shallow } from 'enzyme'

describe('Album', () => {
  it('Create Component', () => {
    const album = { title: 'Some pretty good title!'}
    const wrapper = shallow(<Album album={album} />)

    expect(wrapper).toMatchSnapshot()
  })
})
