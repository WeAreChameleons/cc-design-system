import './Spinner.css'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
}

export const Spinner = ({ size = 'md' }: SpinnerProps) => (
  <div className={`cc-spinner cc-spinner--${size}`} role="status" aria-label="Loading">
    <span className="cc-sr-only">Loading...</span>
  </div>
)

export interface LoadingPageProps {
  label?: string
}

export const LoadingPage = ({ label = 'Loading...' }: LoadingPageProps) => (
  <div className="cc-loading-page">
    <Spinner size="lg" />
    <div className="cc-loading-page__label">{label}</div>
  </div>
)
