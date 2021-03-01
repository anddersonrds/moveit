import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExperienceBar from './ExperienceBar'

describe('<ExperienceBar />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ExperienceBar />)

    expect(screen.getByText(/300 xp/i)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
    screen.logTestingPlaygroundURL()
  })
})
