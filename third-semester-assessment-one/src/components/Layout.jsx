import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Blog
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link
              to="/posts/new"
              className="hover:text-indigo-600 underline underline-offset-4"
            >
              Create Post
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t mt-auto py-6 text-center text-xs text-muted-foreground">
        Blog App &bull; React + TanStack Query + React Router
      </footer>
    </div>
  )
}
