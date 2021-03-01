import { Story, Meta } from '@storybook/react/types-6-0'

import { CompletedChallenges } from './CompletedChallenges'

export default {
  title: 'CompletedChallenges',
  component: CompletedChallenges
} as Meta

export const Default: Story = () => <CompletedChallenges />
