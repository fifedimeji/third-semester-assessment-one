import PostList from '../features/posts/components/PostList.jsx'

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <PostList />
    </section>
  )
}
