import type { Meta, StoryObj } from '@storybook/react'
import { Input, Select, Textarea } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const Disabled: Story = {
  args: { placeholder: 'Disabled input', disabled: true },
}

export const WithValue: Story = {
  args: { defaultValue: 'freddie@chameleon.co' },
}

export const SelectInput: StoryObj = {
  render: () => (
    <Select defaultValue="member">
      <option value="owner">Owner</option>
      <option value="admin">Admin</option>
      <option value="member">Member</option>
    </Select>
  ),
}

export const TextareaInput: StoryObj = {
  render: () => (
    <Textarea placeholder="Write a message..." rows={4} />
  ),
}

export const FormGroup: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
          Name
        </label>
        <Input placeholder="Full name" />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
          Role
        </label>
        <Select>
          <option value="">Select role...</option>
          <option value="core-team">Core Team</option>
          <option value="bizdev-leader">Bizdev Leader</option>
          <option value="collective-member">Collective Member</option>
        </Select>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>
          Notes
        </label>
        <Textarea placeholder="Additional notes..." rows={3} />
      </div>
    </div>
  ),
}
