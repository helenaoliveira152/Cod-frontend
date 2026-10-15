import { useState } from 'react'
import './App.css'
import Home from './compenents/Home'
import Ofertas from './compenents/Ofertas'
import MinhasCompras from './compenents/MinhasCompras'

function App() {
  const [pagina, setPagina] = useState(1)

  function mostrarHome(){
    setPagina(0)
  }

  return (
    <div className='app'>
      <nav>
        <button onClick={mostrarHome}>Home</button>
        <button onClick={() => setPagina(1)}>Ofertas</button>
        <button onClick={() => setPagina(2)}>Minhas compras</button>
      </nav>
      <h1>Navegação</h1> 

      {pagina==0 &&  <Home />}
      {pagina==1 &&  <Ofertas />}
      {pagina==2 && <MinhasCompras />}
     
    </div>
  )
}

export default App
