import PostForm from '../features/posts/components/PostForm.jsx'

export default function CreatePostPage() {
  return (
    <section className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <PostForm />
    </section>
  )
}
