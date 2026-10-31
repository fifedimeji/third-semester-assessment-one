const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.oluwasetemi.dev'

/** Fetch JSON from the API and include useful error details. */
export async function apiClient(path, options = {}) {
  const response = await fetch(new URL(path, `${API_BASE_URL}/`), {
    ...options,
    headers: { Accept: 'application/json', ...options.headers },
  })
  const body = response.status === 204 ? null : await response.json().catch(() => null)
  if (!response.ok) {
    const error = new Error(body?.message || `Request failed (${response.status})`)
    error.status = response.status
    error.body = body
    throw error
  }
  return body
}
