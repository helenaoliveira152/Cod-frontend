import React, { useState } from 'react'

function Media() {
const[inputN, setInputN] = useState('')
const[inputM, setInputM] = useState('')
const[resultado, setResultado] = useState('Digite as notas e aperte o botão')

function calcularMedia(){
    let A = Number(inputN)
    let B = Number(inputM)

    let media = (A + B) / 2;

    if (media >= 7) {
         setResultado("Aprovado🥳");
    } else if (media >= 4) {
         setResultado("Recuperacao🥹");
    } else {
         setResultado("Reprovado💀⚰️");
    }
}

  return (
    <div className='media'>
        <h1>Reprovado ou Aprovado?</h1>
        <label htmlFor="">Nota 1</label>

        <input type="text" 
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
        />
        <label htmlFor="">Nota 2</label>

        <input type="text" 
        value={inputM}
        onChange={(e) => setInputM(e.target.value)}
        />

        <button onClick={calcularMedia}>Ver resultado</button>
        <p>
            {resultado}
        </p>

    </div>
  )
}

export default Media