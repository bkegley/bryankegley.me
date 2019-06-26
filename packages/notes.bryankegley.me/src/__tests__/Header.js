import React from 'react'
import Header from '../components/Header'
import {render} from 'react-testing-library'

describe('<Header />', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Header siteTitle="Test Title" />)
    expect(getByText('Test Title')).toBeDefined()
  })
})
