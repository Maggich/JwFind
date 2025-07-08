import { useState } from 'react'

function App() {
  const [msg, setMsg] = useState('')

  const handleClick = async () => {
    const response = await fetch('http://localhost:8000/api/hello/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'MagDzaga' }),
    })

    const data = await response.json()
    setMsg(data.message)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Поздороваться</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default App
