import { Component } from "react"
import type { ErrorInfo, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.href = "/"
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col items-center justify-center p-6 select-none font-sans">
          <div className="max-w-md w-full glass-panel rounded-2xl p-8 text-center border border-zinc-850 shadow-2xl relative overflow-hidden">
            <div className="glow-blur bg-blue-500 w-32 h-32 -top-10 -left-10 absolute opacity-10"></div>
            
            <div className="w-16 h-16 bg-red-950/40 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            
            <h1 className="text-2xl font-bold tracking-tight text-white mb-2 font-heading">Something went wrong</h1>
            <p className="text-sm text-zinc-400 mb-6 font-sans">
              An unexpected error occurred. Don't worry, you can easily recover.
            </p>
            
            {this.state.error && (
              <div className="text-left bg-zinc-950 border border-zinc-900 p-4 rounded-lg mb-6 overflow-x-auto max-h-32 text-xs font-mono text-zinc-500">
                {this.state.error.toString()}
              </div>
            )}
            
            <button
              onClick={this.handleReset}
              className="w-full btn-primary font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
