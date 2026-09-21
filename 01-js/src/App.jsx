import './App.css'

function App() {

  function gerarRelatorioKowalski() {
  const relPF = Number(prompt("Digite a quantidade de relatórios para PF:"));
  const relPJ = Number(prompt("Digite a quantidade de relatórios para PJ:"));
  const tempoPF = Number(prompt("Digite o tempo gasto nos relatórios PF (em horas):"));
  const tempoPJ = Number(prompt("Digite o tempo gasto nos relatórios PJ (em horas):"));
  const valorPF = Number(prompt("Digite o valor total recebido de PF (R$):"));
  const valorPJ = Number(prompt("Digite o valor total recebido de PJ (R$):"));

  // Totais
  const totalRelatorios = relPF + relPJ;
  const tempoTotal = tempoPF + tempoPJ;
  const valorTotal = valorPF + valorPJ;

  // Médias
  const mediaValorPF = relPF > 0 ? valorPF / relPF : 0;
  const mediaValorPJ = relPJ > 0 ? valorPJ / relPJ : 0;
  const mediaTempoPF = relPF > 0 ? tempoPF / relPF : 0;
  const mediaTempoPJ = relPJ > 0 ? tempoPJ / relPJ : 0;

  alert(
    `========================================\n` +
    `         📊 RELATÓRIO DO KOWALSKI        \n` +
    `========================================\n\n` +
    `📥 DADOS CRUS:\n` +
    `• Relatórios PF: ${relPF} | Tempo: ${tempoPF}h | Recebido: R$ ${valorPF.toFixed(2)}\n` +
    `• Relatórios PJ: ${relPJ} | Tempo: ${tempoPJ}h | Recebido: R$ ${valorPJ.toFixed(2)}\n\n` +
    `----------------------------------------\n` +
    `📌 CONSOLIDADO GERAL:\n` +
    `----------------------------------------\n` +
    `• Total de Relatórios: ${totalRelatorios}\n` +
    `• Tempo Total Trabalhado: ${tempoTotal}h\n` +
    `• Valor Total Recebido: R$ ${valorTotal.toFixed(2)}\n\n` +
    `----------------------------------------\n` +
    `📈 MÉDIAS POR RELATÓRIO:\n` +
    `----------------------------------------\n` +
    `• Pessoa Física (PF):\n` +
    `   - Média de Valor: R$ ${mediaValorPF.toFixed(2)}\n` +
    `   - Média de Tempo: ${mediaTempoPF.toFixed(2)}h/relatório\n\n` +
    `• Pessoa Jurídica (PJ):\n` +
    `   - Média de Valor: R$ ${mediaValorPJ.toFixed(2)}\n` +
    `   - Média de Tempo: ${mediaTempoPJ.toFixed(2)}h/relatório\n` +
    `========================================`
  );
}

  function calcularFreelaJunin() {
  const horasEstimadas = Number(prompt("Digite a quantidade estimada de horas de desenvolvimento:"));

  const custoConsultor = 500;
  const valorHoraJunin = 350;

  const valorDesenvolvimento = horasEstimadas * valorHoraJunin;
  const precoTotalCliente = custoConsultor + valorDesenvolvimento;
  const lucroJunin = precoTotalCliente - custoConsultor;

  alert(
    `--- ORÇAMENTO FREELANCE - JUNIN ---\n\n` +
    `Horas estimadas: ${horasEstimadas}h\n` +
    `Custo da consultoria (Denis Nery): R$ ${custoConsultor.toFixed(2)}\n` +
    `Preço total para o cliente: R$ ${precoTotalCliente.toFixed(2)}\n\n` +
    `Lucro do Junin: R$ ${lucroJunin.toFixed(2)}`
  );
}

  function calcularCustoPrompt() {
  const caracteres = Number(prompt("Digite a quantidade de caracteres do prompt:"));
  const valorPorToken = Number(prompt("Digite o valor de 1 token (em R$):"));

  const taxaFixaTokens = 5;
  const tokensPorCaracter = 1;

  const totalTokens = taxaFixaTokens + (caracteres * tokensPorCaracter);
  const custoTotalReais = totalTokens * valorPorToken;

  alert(
    `--- STARTUP I.A. - CUSTO DE PROMPT ---\n\n` +
    `Caracteres digitados: ${caracteres}\n` +
    `Total de tokens gastos: ${totalTokens}\n` +
    `Custo total: R$ ${custoTotalReais.toFixed(2)}`
  );
}

    function calcularLucroJares() {
   const caminhoes = Number(prompt("Digite a quantidade de caminhões carregados:"));

    const jaresPorCaminhao = 50;
    const precoVendaJare = 90;
    const fretePorCaminhao = 450;

    const totalJares = caminhoes * jaresPorCaminhao;
    const faturamentoTotal = totalJares * precoVendaJare;
    const custoFreteTotal = caminhoes * fretePorCaminhao;
    const lucroTotal = faturamentoTotal - custoFreteTotal;

    alert(
      `--- FAZENDA DO GAEL - VENDAS DE JARÉS ---\n\n` +
      `Caminhões carregados: ${caminhoes}\n` +
      `Total de jarés: ${totalJares}\n` +
      `Faturamento: R$ ${faturamentoTotal.toFixed(2)}\n` +
      `Custo do frete: R$ ${custoFreteTotal.toFixed(2)}\n` +
      `Lucro final: R$ ${lucroTotal.toFixed(2)}`
    );
}

  function calcularChurrasco (){
    let pessoas = Number(prompt("Digite a quantidade de pessoas para o churrasco:"));

    let carneKg = pessoas * 0.5;
    let cervejaL = pessoas * 1.0;
    let aguaL = pessoas * 0.5;
    let refriL = pessoas * 0.2;

    alert(
      `--- CALCULADORA DE CHURRASCO DO GAÚCHO ---\n\n` +
      `Quantidade de pessoas: ${pessoas}\n\n` +
      `Consumo estimado:\n` +
      `- Carne: ${carneKg.toFixed(2)} kg\n` +
      `- Cerveja: ${cervejaL.toFixed(2)} L\n` +
      `- Água: ${aguaL.toFixed(2)} L\n` +
      `- Refrigerante: ${refriL.toFixed(2)} L`
);
  }

  function pesoGramas (){
      let pesoGramas = Number(prompt("Digite o peso da ração a granel (em gramas):"));

  let precoPorQuilo = 10;
  let pesoQuilos = pesoGramas / 1000;
  let precoTotal = pesoQuilos * precoPorQuilo;

  alert(
  `--- PET SHOP RON BERNARDO ---\n\n` +
  `Peso: ${pesoGramas}g (${pesoQuilos.toFixed(2)} kg)\n` +
  `Preço do quilo: R$ 10,00\n` +
  `Total a pagar: R$ ${precoTotal.toFixed(2)}`
);
  }

  function valorPago(){
  let valorPago = Number(prompt("Digite o valor pago na obra de arte (R$):"));

  let valorVenda = valorPago * 3;
  let lucroReais = valorVenda - valorPago;

alert(
  `--- POLÍTICA DE PREÇOS (ROMERO BRIQUE) ---\n\n` +
  `Valor Pago: R$ ${valorPago.toFixed(2)}\n` +
  `Lucro (200%): R$ ${lucroReais.toFixed(2)}\n` +
  `Preço de Venda: R$ ${valorVenda.toFixed(2)}`
);
  }

  function calcularSalario (){
    let salarioTotal = Number(prompt("Digite o seu salário total: "))
    let moradia = Number(prompt("Digite o gasto da moradia: "))
    let luz = Number(prompt("Digite o gasto da luz: "))
    let agua = Number(prompt("Digite o gasto da agua: "))
    let internet = Number(prompt("Digite o gasto da internet: "))
    let gasolina = Number(prompt("Digite o gasto da gasolina: "))
    let streamings = Number(prompt("Digite o gasto de streamings: "))
    let telefone = Number(prompt("Digite o gasto do telefone: "))
    let outros = Number(prompt("Digite o gasto de outros: "))

    let restoSalario = salarioTotal - moradia - luz - agua - internet - gasolina - streamings - telefone - outros

    alert("O resto final do seu salário foi de: R$" + restoSalario)
    
  }

   function calcularBomba(){
    let preco = Number(prompt("Digite o preço unitário: "))
    let quantidade = Number(prompt("Digite a quantidade usada por show: "))
    let show = Number(prompt("Digite a quantidade de shows: "))

    let multiplicar = preco * quantidade;
    let pagar = multiplicar * show;

    alert("Voçê tem " + show + " shows marcados e precisa de " + quantidade + " Bombas para cada show, cada bomba custa R$ " + preco + " e voçê pagará ao todo R$ " + pagar )
   }

     function calcularLucro(){
    let gasto = Number(prompt("Quanto foi gasto em suprimentos e mercadorias: "))
    let vendaDeIngressos = Number(prompt("Qual o Valor da Venda dos Ingressos: "))
    let vendaDeItens =  Number(prompt("Qual o Valor da Venda dos Itens: "))

    let soma = vendaDeIngressos + vendaDeItens
    let lucroBruto = soma - gasto
    let porcentual =  (lucroBruto / gasto) * 100;

    alert("Valor em Reais: R$" + lucroBruto + "\nValor Porcentual:" + porcentual)
   }

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

      <button onClick={calcularLucro}>Calcular Lucro</button>

      <button onClick={calcularBomba}>Calcular Bomba</button>

      <button onClick={calcularSalario}>Calcular Salário</button>

      <button onClick={valorPago}>Calcular valor Pago</button>

      <button onClick={pesoGramas}>Calcular peso gramas</button>

      <button onClick={calcularChurrasco}>Calcular churrasco</button>

      <button onClick={calcularLucroJares}> Lucro Jares</button>

      <button onClick={calcularCustoPrompt}>Custo Prompt </button>

      <button onClick={calcularFreelaJunin}> Freela Junin</button>

      <button onClick={gerarRelatorioKowalski}>Relatório Kowalski </button>



    </div>
  )
}

export default App
