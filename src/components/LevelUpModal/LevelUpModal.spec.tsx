import { render, screen } from '@testing-library/react'

import { LevelUpModal } from './LevelUpModal'

describe('<LevelUpModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<LevelUpModal />)

    expect(screen.getByRole('heading', { name: /LevelUpModal/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
    // screen.logTestingPlaygroundURL()
  })
})
