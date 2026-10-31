import { useParams } from 'react-router-dom'
import { usePost } from '../features/posts/queries.js'
import PostContent from '../features/posts/components/PostContent.jsx'
import Spinner from '../components/Spinner.jsx'

export default function PostDetailPage() {
  const { postId } = useParams()
  const { data: post, isPending, isError, error } = usePost(postId)

  if (isPending) return <Spinner />
  if (isError) {
    return (
      <div className="max-w-7xl mx-auto py-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-800">
          Post not found: {error?.message || 'Unknown error'}
        </div>
      </div>
    )
  }

  return (
    <section className="max-w-4xl mx-auto py-6">
      <PostContent post={post} />
    </section>
  )
}
