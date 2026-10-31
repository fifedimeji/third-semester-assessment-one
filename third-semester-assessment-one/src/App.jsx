import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Spinner from './components/Spinner.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const PostDetailPage = lazy(() => import('./pages/PostDetailPage.jsx'))
const CreatePostPage = lazy(() => import('./pages/CreatePostPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const wrap = (Page) => <Suspense fallback={<Spinner />}><Page /></Suspense>

const router = createBrowserRouter([{
  path: '/', element: <Layout />, errorElement: <ErrorBoundary />,
  children: [
    { index: true, element: wrap(HomePage) },
    { path: 'posts/new', element: wrap(CreatePostPage) },
    { path: 'posts/:postId', element: wrap(PostDetailPage) },
    { path: '404', element: wrap(NotFoundPage) },
    { path: '*', element: <Navigate to="/404" replace /> },
  ],
}])

export default function App() { return <RouterProvider router={router} /> }
