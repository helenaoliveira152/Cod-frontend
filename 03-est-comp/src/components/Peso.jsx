import { useState } from "react"

function Peso() {
    const[pesoIde, setPesoIde] = useState()

    function calPeso(){
        let genero = Number(prompt("Digite o seu gênero (1 - feminino / 2 - masculino):: "))
        let altura = Number(prompt("Digite a sua altura: "))

        if(genero === 1){
            setPesoIde((62.1 * altura) - 44.7)
        }else if(genero === 2){
            setPesoIde((72.7 * altura) - 58)
        }else{
            setPesoIde("Gênero inválido! ")
        }
    }

  return (
    <div>
        <h2>Peso ideal</h2>
        <button className="btn4" onClick={calPeso}>Calcular Peso</button>
        {pesoIde}
    </div>
  )
}

export default Peso