import { Story, Meta } from '@storybook/react/types-6-0'

import { Countdown } from './Countdown'

export default {
  title: 'Countdown',
  component: Countdown
} as Meta

export const Default: Story = () => <Countdown />
