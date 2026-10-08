import './App.css'
import Eleicao from './components/Eleicao'
import Jogo from './components/Jogo'
import Peso from './components/Peso'
import Pousada from './components/Pousada'
import Maca from './components/Maca'


function App() {  
  return (
    <div className='App'>
      <h1>Estados e Componentes</h1>

      <Pousada/>
      <Jogo/>
      <Eleicao/>
      <Peso/>
      <Maca/>

    </div>
  )
}

export default App
