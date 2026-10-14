import './App.css'
import Eleicao from './components/Eleicao'
import Jogo from './components/Jogo'
import Peso from './components/Peso'
import Pousada from './components/Pousada'
import Maca from './components/Maca'
import Ganso from './components/Ganso'
import Ganso02 from './components/Ganso02'
import Maquina from './components/Maquina'
import Deslocamento from './components/Deslocamento'
import Entrada from './components/Entrada'
import Transporte from './components/Transporte'
import CentroC from './components/CentroC'
import Jaula from './components/Jaula'


function App() {  
  return (
    <div className='App'>
      <h1>Estados e Componentes</h1>

      <h2>#0030</h2>
      <Ganso/>
      <Ganso02/>
      <Maquina/>
      <Deslocamento/>
      <Entrada/>
      <Transporte/>
      <CentroC/>
      <Jaula/>

      <hr />

      <h2>#0027.sq05</h2>

      <Pousada/>
      <Jogo/>
      <Eleicao/>
      <Peso/>
      <Maca/>

    </div>
  )
}

export default App
