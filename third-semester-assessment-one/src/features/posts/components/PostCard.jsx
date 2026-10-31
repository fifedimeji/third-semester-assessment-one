import { Link } from 'react-router-dom'
import { statusBadgeClasses, formatDate } from '../../../lib/format.js'

/**
 * A single post summary card. The entire card links to the post detail page.
 *
 * @param {Object} props
 * @param {Object} props.post - The post to display
 */
export default function PostCard({ post }) {
  if (!post) return null

  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <article>
        <h3 className="post-card-title">{post.title}</h3>

        {post.category && (
          <p className="text-sm text-muted-foreground">
            Category: {post.category}
          </p>
        )}

        <span className={statusBadgeClasses(post.status)}>
          {post.status}
        </span>

        {post.excerpt && (
          <p className="mt-3 line-clamp-2 text-foreground">{post.excerpt}</p>
        )}

        <footer className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          {post.author && <span>By {post.author}</span>}
          {post.createdAt && (
            <span>
              {'·'}
              {formatDate(post.createdAt)}
            </span>
          )}
        </footer>
      </article>
    </Link>
  )
}
