import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Ex008 from './pages/Ex008'
import HoHo from './pages/HoHo'
import Media from './pages/Media'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
      <Home/>
      <Demo/>
      <Ex008/>
      <HoHo/>
      <Media/>
   </div>
  )
}

export default App
