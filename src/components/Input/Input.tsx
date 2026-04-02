import './Input.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => (
  <input className="cc-input" {...props} />
)

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export const Select = ({ children, ...props }: SelectProps) => (
  <select className="cc-input cc-select" {...props}>{children}</select>
)

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => (
  <textarea className="cc-input cc-textarea" {...props} />
)
