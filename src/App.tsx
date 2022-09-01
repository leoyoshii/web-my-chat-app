import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello Worldasas</h1>
      <button onClick={() => setCount(old => old + 1)}>{count}</button>
    </div>
  )
}

export default App
