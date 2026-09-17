import './App.css'

function App() {

  function calcularFat(){
    let faturouHoje = Number(prompt("Quanto faturou hoje?: "))
    
    let premiacoes = Number(prompt("Quanto pagou em premiações hoje?: "))
   
    let agrados = Number(prompt("Quanto gastou em agrados hoje?: "))
    
    let comissao = Number(prompt("Quanto pagou em comissões hoje?: "))


    let lucro = faturouHoje - premiacoes - agrados - comissao

    alert("O lucro de hoje foi de R$" + lucro.toFixed(2))
    

    
  }

  function calcularFrete() {
    let peso = Number(prompt("Qual o peso da carga?: "));

    let distancia = Number(prompt("Qual a distância percorrida?: "));

    let volume = Number(prompt("Qual o volume do frete?: "));

    let frete = Number(15+(2 * peso) + (0.05 * distancia)+(10 * volume))

   alert("O preço do frete vai ser: R$" + frete.toFixed(2))
  }

  function CalcularCelular() {
    let n = Number(prompt("Digite o número de vezes que o candidato usou o celular:"));

    let chance = (0.1 / (1 + 500 * n)) * 100;
    alert("Chance de aprovação: " + chance + "%");

  }

  function pesoCaminhao() {
    let pesoBalanca = Number(prompt("Qual o peso bruto total?: "))
    let pesoCaminhao = Number(prompt("Qual o peso do caminhão?: "))

    let resultado = pesoBalanca - pesoCaminhao
    alert("A carga que o caminhão está carregando é de " + resultado)
  }

  function calcularDias() {
    let salarioMensal = Number(prompt("Digite o salário mensal:"));
    let diasTrabalhados = Number(prompt("Digite quantos dias trabalha por mês:"));

    let salarioPorDia = salarioMensal / diasTrabalhados;
    let salarioSemanal = salarioPorDia * 5;

    alert("Salário por dia: R$ " + salarioPorDia.toFixed(2));

  }

  function custosIgreja() {
    let custoMensal = Number(prompt("Quais os custos mensais da igreja? : "))
    let doacoes = Number(prompt("Quantidade de doações recebidas? : "))

    let total = custoMensal - doacoes
    alert("Para pagar completamente os custos mensais faltam R$" + total.toFixed(2))
  }

  function calcularLaranjas() {
    let quantidadeI = Number(prompt("Qual a quantidade de laranjas inicial: "))
    let quantidadeF = Number(prompt("Qual a quantidade de laranjas final: "))

    let toatl = quantidadeI - quantidadeF
    alert("A quantidade foi de " + toatl + " laranjas vendidas no dia!")
  }

  function contadorCLT() {
    let CLT, estagiarios, PJ

    CLT = Number(prompt("Quantos devs CLT?: "))
    estagiarios = Number(prompt("Quantos devs estágiarios?: "))
    PJ = Number(prompt("Quantos devs PJ?: "))

    let devs = CLT + PJ + estagiarios
    alert("A quantidade é de " + devs + " DEVS na empresa!")

  }

  function trocarSapatos() {
    let preco = Number(prompt("Qual o preço do seu par de calçados?: "))
    let quantidade = Number(prompt("Qual a quantidade de pares?: "))

    let valorTotal = preco * quantidade
    alert("O valor total da troca vai ser: R$" + valorTotal.toFixed(2))
  }

  function calcularPontos() {
    let vitorias = Number(prompt("Número de vitórias: "))
    let empates = Number(prompt("Número de empates: "))

    let pontos = vitorias * 3 + empates
    alert("O time tem " + pontos + " pontos!")
  }

  function testar() {
    let nome = prompt("Qual seu nome? ")
    let bocaDoSapo = nome
    alert(nome + ", seu nome tá na boca do sapo🐸")
  }
  function calcularMedia() {
    let not1 = Number(prompt("Qual a sua primeira nota?: "))
    let not2 = Number(prompt("Qual a sua segunda nota:? "))

    let media = (not1 + not2) / 2
    alert("Sua nota é: " + media)
  }

  return (
    <div className="cont-app">
      <h1>JavaScript no React</h1>

      <h2>Exercicios supimpas</h2>
      <hr />

      <button onClick={calcularPontos} >Campeonato</button>

      <button onClick={trocarSapatos} >Trocas Pé Pequeno</button>

      <button onClick={contadorCLT}>Contar DEVS</button>

      <button onClick={calcularLaranjas}>Calcular Laranjas</button>

      <button onClick={testar}>Testar</button>

      <button onClick={calcularMedia}>Média</button>

      <button onClick={custosIgreja}>Custos igreja</button>

      <button onClick={calcularDias}>Dias Trabalhados</button>

      <button onDoubleClick={pesoCaminhao}>Peso Caminhão</button>

      <button onClick={CalcularCelular}>Usando o Celular</button>

      <button onClick={calcularFrete}>Preço Frete</button>

      <button onClick={calcularFat}>Faturamento Dona Bete</button>

    </div>
  )
}

export default App
