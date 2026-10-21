import { useState } from 'react'
import './App.css'
import Aprendiz from './components/Aprendiz'
import Backend from './components/Backend'
import Desenvolvedor from './components/Desenvolvedor'
import Estudante from './components/Estudante'
import FrontEnd from './components/FrontEnd'

function App() {
  const [site, setSite] = useState(0)

  return (
    <div className='app'>
      {/* Flores caindo nas laterais */}
      <div className="petals-container left">
        <span className="petal">🌸</span>
        <span className="petal">🌺</span>
        <span className="petal">🌸</span>
        <span className="petal">🌼</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
      </div>

      <div className="petals-container right">
        <span className="petal">🌸</span>
        <span className="petal">🌼</span>
        <span className="petal">🌸</span>
        <span className="petal">🌺</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
        <span className="petal">🌸</span>
      </div>

      <nav>
        <button onClick={() => setSite(0)}>Oração do aprendiz</button>
        <button onClick={() => setSite(1)}>Oração do desenvolvedor Web</button>
        <button onClick={() => setSite(2)}>Oração do Frontend</button>
        <button onClick={() => setSite(3)}>Oração do Backend</button>
        <button onClick={() => setSite(4)}>Oração do estudante</button>
      </nav>
      <h1>Orações DEVs Cansados</h1>

      {site==0 && <Aprendiz/>}
      {site==1 && <Desenvolvedor/>}
      {site==2 && <FrontEnd/>}
      {site==3 && <Backend/>}
      {site==4 && <Estudante/>}
    </div>
  )
}

export default App
