import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPosts, getPost, createPost } from './api.js'

/**
 * Centralized query keys for posts.
 *
 * Using a single source of truth for query keys prevents string-related
 * mistakes and keeps cache invalidation consistent across hooks and
 * components.
 */
export const postKeys = {
  /** Identifies the complete posts collection. */
  all: ['posts'],
  /** Identifies the paginated/filtered posts list. */
  list: (filters) => [...postKeys.all, 'list', filters],
  /** Identifies an individual post by its ID. */
  detail: (id) => [...postKeys.all, 'detail', id],
}

/**
 * TanStack Query options for the posts list.
 *
 * @param {Object} [filters] - Post list filters
 * @returns {Object} useQuery configuration
 */
export function usePostsOptions(filters = {}) {
  return {
    queryKey: postKeys.list(filters),
    queryFn: () => getPosts(filters),
  }
}

/**
 * Hook: fetch the posts list.
 *
 * @param {Object} [filters] - Post list filters
 * @returns {Object} TanStack Query result
 */
export function usePosts(filters = {}) {
  return useQuery(usePostsOptions(filters))
}

/**
 * TanStack Query options for a single post.
 *
 * @param {string} id - Post ID or slug
 * @returns {Object} useQuery configuration
 */
export function usePostOptions(id) {
  return {
    queryKey: postKeys.detail(id),
    queryFn: () => getPost(id),
    enabled: !!id,
  }
}

/**
 * Hook: fetch a single post by ID or slug.
 *
 * @param {string} id - Post ID or slug
 * @returns {Object} TanStack Query result
 */
export function usePost(id) {
  return useQuery(usePostOptions(id))
}

/**
 * Hook: create a new post. Invalidates the posts list on success.
 *
 * @returns {Object} useMutation result
 */
export function useCreatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.all })
    },
  })
}
