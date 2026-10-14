import React, { useState } from 'react'

function Ganso02() {
    const [marujo, setMarujo] = useState()

    function calcularRecrutamento(){
        let nadar = prompt("O marujo sabe nadar?: (sim ou nao) ")
        let idade = prompt("Qual a idade do marujo?: ")
        let recomendacao = prompt("O marujo tem recomendação?:(sim ou nao) ")

        if(nadar == "sim" && idade >= 16 && recomendacao == "nao"){
            setMarujo("Aprovado para o navio!")
        }else if(nadar == "nao" && idade >= 14 && recomendacao == "sim"){
            setMarujo("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
        }else{
            setMarujo("Reprovado. Volte quando estiver mais preparado para o mar.")
        }
    }

  return (
    <div className='ganso02'>
        <h3>Ganso 02</h3>
        <button onClick={calcularRecrutamento}>Recrutamento Marujos</button>
        {marujo}
    </div>
  )
}

export default Ganso02