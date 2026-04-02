import { useEffect } from 'react'
import './Modal.css'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="cc-modal-overlay" onClick={onClose}>
      <div className="cc-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {title && (
          <div className="cc-modal__header">
            <h2 className="cc-modal__title">{title}</h2>
            <button className="cc-modal__close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}
        <div className="cc-modal__body">{children}</div>
      </div>
    </div>
  )
}
