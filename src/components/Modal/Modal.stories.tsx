import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Modal>

export const WithTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
          <p>Are you sure you want to proceed? This action cannot be undone.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'flex-end' }}>
            <Button label="Cancel" variant="secondary" onClick={() => setOpen(false)} />
            <Button label="Confirm" variant="primary" onClick={() => setOpen(false)} />
          </div>
        </Modal>
      </>
    )
  },
}

export const WithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button label="Open Simple Modal" variant="secondary" onClick={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)}>
          <p style={{ textAlign: 'center', fontSize: '16px' }}>
            A simple modal without a title header.
          </p>
        </Modal>
      </>
    )
  },
}
