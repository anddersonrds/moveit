import { render, screen } from '@testing-library/react'

import { CompletedChallenges } from './CompletedChallenges'

describe('<CompletedChallenges />', () => {
  it('should render the heading', () => {
    const { container } = render(<CompletedChallenges />)

    expect(screen.getByRole('heading', { name: /CompletedChallenges/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
    // screen.logTestingPlaygroundURL()
  })
})
