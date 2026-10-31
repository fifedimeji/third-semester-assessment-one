import { Component } from 'react'
import ErrorFallback from './ErrorFallback.jsx'

/**
 * Custom React error boundary.
 *
 * Uses the class-component lifecycle methods `getDerivedStateFromError` and
 * `componentDidCatch` to capture rendering errors in its subtree and display
 * a fallback UI instead of crashing the whole application.
 */
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />
    }
    return this.props.children
  }
}

export default ErrorBoundary
