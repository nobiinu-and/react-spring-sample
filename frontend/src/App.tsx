import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
        return res.json()
      })
      .then((data: { message: string }) => setMessage(data.message))
      .catch((err: Error) => setError(err.message))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '4rem' }}>
      <h1>{error ? `Error: ${error}` : message || 'Loading...'}</h1>
      <p style={{ color: 'gray' }}>React + Spring Boot + PostgreSQL</p>
    </div>
  )
}

export default App
