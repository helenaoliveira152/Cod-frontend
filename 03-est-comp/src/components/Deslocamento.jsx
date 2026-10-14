import React, { useState } from 'react'

function Deslocamento() {
const[transporte, setTransporte] = useState()

function calcularTempo(){
    let estaGripado = prompt("Você está gripado?: ")
    let tempoViagem = prompt("Qual vai ser o tempo da viagem?: ")

    if (estaGripado == "nao" && tempoViagem <= 45){
        setTransporte("Viagem autorizada. Rumo ao show!")
    }else{
        setTransporte("Deslocamento inviável. Melhor recusar este evento.")
    }
}


  return (
    <div className='deslocamento'>
        <h3>Deslocamento para eventos</h3>
        <button onClick={calcularTempo}>Eventos</button>
        {transporte}
    </div>
  )
}

export default Deslocamento