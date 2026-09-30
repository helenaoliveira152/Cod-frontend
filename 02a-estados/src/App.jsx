import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let n1 = Number(prompt("Nota 1:  "));
    let n2 = Number(prompt("Nota 2:  "));
    let media = (n1 + n2) / 2

    setSaida(media)
  }

  function girarD6(){
    let n = Math.ceil(Math.random()*6 );

    setSaida(n)
  }

  function girarD8(){
    let n = Math.ceil(Math.random()*8 );

    setSaida(n)
  }

 function girarD12(){
    let n = Math.ceil(Math.random()*12 );

    setSaida(n)
  }

   function girarD20(){
    let n = Math.ceil(Math.random()*20 );

    setSaida(n)
  }

  function validarSenha(){
    let senha =prompt("Digite a senha: ")

    if(senha == '1234'){
     setSaida("Acesso permitdo!")
    }else{
      setSaida("Acesso negado, tente novamente!")
    }

    setSaida(n)
  }

  function validarNumero(){
    let n1 = Number(prompt("O primerio número: ")) 
    let n2 = Number(prompt("O segundao número: ")) 

    if(n1 > n2){
      setSaida("O primeiro número é maior! ")
    }else{
      setSaida("O segundo número é maior!")
    }

    setSaida(n)
  }

  function calcularCarro(){
    
  }

  return (
    <div className="app">
      <h1>Estados!</h1>
      <hr />
      
      <button onClick={calcularMedia}>Média</button>
      <button onClick={girarD6}>D6</button>
      <button onClick={girarD8}>D8</button>
      <button onClick={girarD12}>D12</button>
      <button onClick={girarD20}>D20</button>
      <button onClick={validarSenha}>Validar Senha</button>
      <button onClick={validarNumero}>Maior ou menor?</button>
      <button onClick={calcularCarro}>Rodízio de Carros</button>

      <p>
        Resultado: {saida}
      </p>

    </div>
  )
}

export default App