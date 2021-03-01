import { Story, Meta } from '@storybook/react/types-6-0'

import { ChallengeBox } from './ChallengeBox'

export default {
  title: 'ChallengeBox',
  component: ChallengeBox
} as Meta

export const Default: Story = () => <ChallengeBox />
