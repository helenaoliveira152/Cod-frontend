import React, { useState } from 'react'

function Maca () {
    const[preMaca, setPreMaca] = useState()

    function calcularMaca(){
        let quantidade = Number(prompt("Digite a quantdade de maçãs que seram compradas: "))
        let valor 
            
            if (quantidade <= 12) {
                valor = 0.30
            } else {
                valor = 0.25
            }

            let total = quantidade * valor
            setPreMaca("O valor da compra é de R$" + total)
    }

  return (
    <div>
        <h2>Preço Maçã</h2>
        <button onClick={calcularMaca}>Calcular preço Maçãs</button>
        {preMaca}
    </div>
  )
}

export default Maca