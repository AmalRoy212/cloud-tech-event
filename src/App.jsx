import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container-fluid bg-dark" style={{width:"100%", height:"100vh"}}>
      <h1 className='text-primary'>Bootstrap test</h1>
     </div>
    </>
  )
}

export default App
