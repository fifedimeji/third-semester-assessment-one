import { Link } from 'react-router-dom'
import { statusBadgeClasses, formatDateTime } from '../../../lib/format.js'

export default function PostContent({ post }) {
  if (!post) {
    return <div className="text-center text-muted-foreground py-8">No post selected.</div>
  }

  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>

        {post.category && (
          <p className="text-sm text-muted-foreground">
            Category: {post.category}
          </p>
        )}

        <span className={statusBadgeClasses(post.status)}>
          {post.status}
        </span>
      </header>

      {post.excerpt && (
        <blockquote className="mb-6 border-l border-indigo-500 pl-4 italic text-muted-foreground">
          {post.excerpt}
        </blockquote>
      )}

      <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <footer className="mt-8 pt-6 border-t text-xs text-muted-foreground">
        {post.createdAt && (
          <p>Published: {formatDateTime(post.createdAt)}</p>
        )}
        {post.updatedAt && (
          <p>Updated: {formatDateTime(post.updatedAt)}</p>
        )}
      </footer>

      <p className="mt-6">
        <Link to="/" className="text-indigo-600 hover:underline font-medium">
          ← Back to all posts
        </Link>
      </p>
    </article>
  )
}
