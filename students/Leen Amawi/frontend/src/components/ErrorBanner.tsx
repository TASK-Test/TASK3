type ErrorBannerProps = {
  message: string
}

function ErrorBanner({ message }: ErrorBannerProps) {
  return <p className="error-banner">{message}</p>
}

export default ErrorBanner