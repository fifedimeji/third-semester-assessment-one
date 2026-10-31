import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="text-sm text-indigo-600 hover:underline"
      onClick={() => {
        const wentBack = navigate(-1)
        if (!wentBack) {
          navigate('/')
        }
      }}
    >
      ← Go back
    </button>
  )
}
