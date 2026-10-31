export default function ErrorFallback({ error, errorInfo }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-800 max-w-2xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
      <p className="mb-4">{error?.message || 'An unexpected error occurred.'}</p>
      {errorInfo && (
        <details className="mt-2 text-xs text-red-600">
          <summary>Component stack</summary>
          <pre>{errorInfo.componentStack}</pre>
        </details>
      )}
      <button
        type="button"
        className="mt-4 text-indigo-600 hover:underline"
        onClick={() => window.location.reload()}
      >
        Reload page
      </button>
    </div>
  )
}
