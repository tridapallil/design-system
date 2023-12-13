import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@tridapallil/react'

export default {
  title: 'Surgfaces/Button',
  component: Box,
  args: {
    children: (
      <>
        <Text>test element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
