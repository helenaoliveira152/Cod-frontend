import './App.css'

function App() {

  function testar(){
    let nome = prompt("Qual seu nome? ")
    let bocaDoSapo = nome
    alert(nome + ", seu nome tá na boca do sapo🐸")
  }
  function calcularMedia(){
    let not1 = Number(prompt("Qual a sua primeira nota?: "))
    let not2 = Number(prompt("Qual a sua segunda nota:? "))
    
    let media = (not1+not2) / 2
    alert("Sua nota é: " + media)
  }

  return (
    <div className="cont-app">
      <h1>JavaScript no React</h1>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
