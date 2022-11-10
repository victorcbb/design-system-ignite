import type { Meta, StoryObj } from '@storybook/react'
import { MultStep, MultStepProps, Box } from '@victor-ignite-ui/react'

export default {
  title: 'Form/Mult Step',
  component: MultStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultStepProps>

export const Primary: StoryObj<MultStepProps> = {
  args: {},
}

export const Full: StoryObj<MultStepProps> = {
  args: {
    currentStep: 4,
  },
}
