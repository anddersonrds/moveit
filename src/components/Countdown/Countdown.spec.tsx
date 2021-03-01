import { render, screen } from '@testing-library/react'

import { Countdown } from './Countdown'

describe('<Countdown />', () => {
  it('should render the heading', () => {
    const { container } = render(<Countdown />)

    expect(screen.getByRole('heading', { name: /Countdown/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
    // screen.logTestingPlaygroundURL()
  })
})
