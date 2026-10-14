import React, { useState } from 'react'

function Entrada() {
const[condicoes, setCondicoes] = useState()

function calcularCondicoes(){
    let somFuncionando = prompt("O som está completo? (s ou n)")
    let figurinoCompleto = prompt("O figurino está completo?(s ou n) ")

   if (somFuncionando === "S" && figurinoCompleto === "S") {
            setCondicoes("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        } else if (somFuncionando === "N" && figurinoCompleto === "S") {
            setCondicoes("Sem som. Realizar apresentação alternativa no salão.")
        } else if (somFuncionando === "S" && figurinoCompleto === "N") {
            setCondicoes("Faltando parte do figurino. Te vira no improviso!")
        } else {
            setCondicoes("Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }

  return (
    <div className='entrada'>
        <h3>Entrada do aplco</h3>
        <button onClick={calcularCondicoes}>Entrada para o palco</button>
        {condicoes}
    </div>
  )
}
export default Entrada