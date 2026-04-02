import type { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from '../../components/ColorPalette/ColorPalette'

const meta: Meta<typeof ColorPalette> = {
  title: 'Design Tokens/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof ColorPalette>

export const FullPalette: Story = {
  name: 'Full palette',
}
