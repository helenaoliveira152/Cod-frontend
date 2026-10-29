import React, { useState } from 'react'

function Ex008() {
    const [inputN, setInputN] = useState('')
    const [inputM, setInputM] = useState('')
    const [resultado, setResultado] = useState('Digite as pressões e aperte o botão')

    function calcularBomba() {
        let N = Number(inputN)
        let M = Number(inputM)
        let diferenca = N - M

        setResultado("O número é " , diferenca)
    }


  return (
    <div className='ex008'>
        <h1>0081 - Pneu</h1>
            <label htmlFor="">pressão 1</label>

            <input type="text" 
            value={inputN}
            onChange={(e) => setInputN(e.target.value)}
        />
             <label htmlFor="">pressão 2</label>

            <input type="text" 
            value={inputM}
            onChange={(e) => setInputM(e.target.value)}
        />

        <button onClick={calcularBomba}>Calcular Valor Bomba</button>
        <p>
            {resultado}
        </p>

    </div>
  )
}

export default Ex008