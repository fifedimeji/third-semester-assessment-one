import { apiClient } from '../../lib/apiClient.js'

function buildQueryString(filters = {}) {
  const params = new URLSearchParams()
  if (filters.all !== undefined) params.set('all', String(filters.all))
  if (filters.page !== undefined) params.set('page', String(filters.page))
  if (filters.limit !== undefined) params.set('limit', String(filters.limit))
  if (filters.category) params.set('category', filters.category)
  if (filters.status) params.set('status', filters.status)
  if (filters.search) params.set('search', filters.search)
  if (filters.sort) params.set('sort', filters.sort)
  const query = params.toString()
  return query ? `?${query}` : ''
}

/**
 * List all posts with optional filtering.
 *
 * GET /posts
 *
 * @param {Object} [filters] - Post list filters
 * @returns {Promise<Object>} The API response ({ data: Post[], meta })
 */
export async function getPosts(filters = {}) {
  return apiClient(`/posts${buildQueryString(filters)}`)
}

/**
 * Get a single post by ID or slug.
 *
 * GET /posts/{id}
 *
 * @param {string} id - Post ID (UUID) or slug
 * @returns {Promise<Object>} The requested post
 */
export async function getPost(id) {
  return apiClient(`/posts/${encodeURIComponent(id)}`)
}

/**
 * Create a new post. The slug is auto-generated from the title when omitted.
 *
 * POST /posts
 *
 * @param {Object} post - The post to create
 * @param {string} post.title - Post title (required)
 * @param {string} post.content - Post content (required)
 * @param {string} [post.slug] - Custom slug
 * @param {string} [post.excerpt] - Post excerpt
 * @param {string} [post.featuredImage] - Featured image URL
 * @param {"DRAFT"|"PUBLISHED"|"ARCHIVED"} [post.status] - Post status
 * @param {string} [post.category] - Post category
 * @param {string} [post.tags] - Post tags
 * @param {string} [post.publishedAt] - Publication date (ISO 8601)
 * @param {boolean} [post.isDefault] - Default post flag
 * @param {string} [post.author] - Post author
 * @returns {Promise<Object>} The created post
 */
export async function createPost(post) {
  return apiClient('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
}
