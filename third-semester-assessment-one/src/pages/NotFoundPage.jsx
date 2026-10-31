import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="max-w-7xl mx-auto py-12 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <p className="mt-6">
        <Link to="/" className="text-indigo-600 hover:underline font-medium">
          Return to homepage
        </Link>
      </p>
    </section>
  )
}
