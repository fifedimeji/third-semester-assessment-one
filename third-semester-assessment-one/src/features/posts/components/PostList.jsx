import { usePosts } from '../queries.js'
import PostCard from './PostCard.jsx'
import Spinner from '../../../components/Spinner.jsx'

export default function PostList({ filters } = {}) {
  const { data, isPending, isError, error } = usePosts(filters)

  // The API responds with either { data, meta } or a plain array.
  const posts = Array.isArray(data) ? data : (data?.data ?? [])

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return (
      <div className="error-banner">
        Failed to load posts: {error?.message || 'Unknown error'}
      </div>
    )
  }

  if (posts.length === 0) {
    return <div className="empty-state">No posts found.</div>
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
