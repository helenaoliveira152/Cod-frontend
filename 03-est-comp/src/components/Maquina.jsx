import React, { useState } from 'react'

function Maquina() {
    const[criancasP, setCriancasP] = useState()

    function calcularCriancas(){
        let criancasPequenas = prompt("Tem alguma criança pequena na festa? (sim ou nao)")
        let velocidadeVento = prompt("O lugar está bem ventilado? (sim ou nao)")

        if(criancasPequenas == "nao" && velocidadeVento == "sim"){
            setCriancasP("Fumaça liberada. Que comecem os mistérios!")
        }else{
            setCriancasP("Fumaça bloqueada. Aguardar condições ideais.")
        }
    }

  return (
    <div className='maquina'>
        <h3>Maquina de fumaça</h3>
        <button onClick={calcularCriancas}>Qauntidade de crianças</button>
        {criancasP}
    </div>
  )
}

export default Maquina