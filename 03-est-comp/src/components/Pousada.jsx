import { useState } from 'react'

function Pousada() {
    const[conta, setConta] = useState()

    function diarias(){
        let dias = Number(prompt("O número de dias que ficará no albergue:"));
        let diaria

        if (dias <= 5) {
            diaria = 100
        } else if (dias <= 10) {
            diaria = 90
        } else {
            diaria = 80
        }

        let valorBruto = dias * diaria;
        let descontoEmocional = valorBruto * 0.10
        let valorDesconto = valorBruto - descontoEmocional
        let descontoAssociacao = valorDesconto * 0.15
        let valorFinalDescontos = valorDesconto - descontoAssociacao;
        let multa = 150
        let total = valorFinalDescontos + multa;

            setConta("O valor do total de dias na pousada é de: R$" + total)
    }

  return (
    <div className='pousada'>
        <h2>Pousada, oba!!</h2>
        <button onClick={diarias}>Diarias Hotel</button>
        {conta}
    </div>
  )
}

export default Pousada