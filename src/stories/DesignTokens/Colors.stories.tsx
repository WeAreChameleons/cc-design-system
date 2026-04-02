import type { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from '../../components/ColorPalette/ColorPalette'

const meta: Meta<typeof ColorPalette> = {
  title: 'Design Tokens/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof ColorPalette>

export const Default: Story = {
  name: 'Default',
}
