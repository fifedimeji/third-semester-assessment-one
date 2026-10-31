import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreatePost } from '../queries.js'

export default function PostForm() {
  const navigate = useNavigate()
  const createPostMutation = useCreatePost()

  const [form, setForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    status: 'PUBLISHED',
  })
  const [message, setMessage] = useState('')

  const handleChange = (key) => (event) => {
    setForm({ ...form, [key]: event.target.value })
    setMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    try {
      const created = await createPostMutation.mutateAsync({
        title: form.title,
        content: form.content,
        excerpt: form.excerpt || undefined,
        category: form.category || undefined,
        status: form.status,
      })
      setMessage(`Post "${created.title}" created successfully.`)
      navigate(`/posts/${created.id}`)
    } catch (error) {
      setMessage(error.message || 'Failed to create post. Please try again.')
    }
  }

  const isPending = createPostMutation.isPending
  const isError = message.startsWith('Failed')

  return (
    <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label className="form-label" htmlFor="title">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          className="form-input"
          required
          value={form.title}
          onChange={handleChange('title')}
          placeholder="Post title"
        />
      </div>

      <div className="space-y-1">
        <label className="form-label" htmlFor="content">
          Content <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          className="form-input"
          required
          rows={8}
          value={form.content}
          onChange={handleChange('content')}
          placeholder="Post content"
        />
      </div>

      <div className="space-y-1">
        <label className="form-label" htmlFor="excerpt">
          Excerpt
        </label>
        <input
          id="excerpt"
          name="excerpt"
          className="form-input"
          value={form.excerpt}
          onChange={handleChange('excerpt')}
          placeholder="Short summary"
        />
      </div>

      <div className="space-y-1">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <input
          id="category"
          name="category"
          className="form-input"
          value={form.category}
          onChange={handleChange('category')}
          placeholder="e.g. Technology"
        />
      </div>

      <div className="space-y-1">
        <label className="form-label" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          name="status"
          className="form-select"
          value={form.status}
          onChange={handleChange('status')}
        >
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      {message && (
        <p className={`text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  )
}
