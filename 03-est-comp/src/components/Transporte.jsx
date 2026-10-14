import React, { useState } from 'react'

function Transporte() {
  const[liga, setliga] = useState()

 function calcularManutemcao() {
        let emManutencao = confirm("Está em manutenção?")
        let emergenciaAtiva = confirm("A emergência está ativa?")

        if(emManutencao === false && emergenciaAtiva === false){
          setliga("Transporte liberado para uso.")
        }else{
          setliga("Transporte indisponível por motivo de segurança.")
        }
    }
  return (
    <div className='transporte'>
      <h3>Transporte Interno</h3>
      <button onClick={calcularManutemcao}>Sistema</button>
      {liga}
    </div>
  )
}

export default Transporte