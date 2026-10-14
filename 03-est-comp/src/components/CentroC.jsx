import React, { useState } from 'react'

function CentroC() {
    const[cracha, setCracha] = useState()

    function validar(){
        let crachaValido = confirm("Tem crachá valido?")
        let digitalReconhecida = confirm("Tem diigital valida?")

         if(crachaValido === true && digitalReconhecida === true){
          setCracha("Acesso permitido!")
        }else{
          setCracha("Acesso negado!")
        }

    }
  return (
    <div className='centroC'>
        <h3>Acesso ao centro de comando</h3>
        <button onClick={validar}>Denis Nery</button>
        {cracha}
    </div>
  )
}

export default CentroC