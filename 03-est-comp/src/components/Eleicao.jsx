import { useState } from "react"

function Eleicao() {
    const[idade, setIdade] = useState()

    function votacao(){
        let i = Number(prompt("Digite a sua idade: "))

        if(i < 16){
            setIdade("Não pode votar ainda!")
        }else if(i >= 16 && i < 18){
            setIdade("voto facultativo!")
        }else if(i >= 18 && i <= 65){
            setIdade("Voto obrigatório!")
        }else{
            setIdade("Voto facultativo!")
        }
    }

  return (
    <div className="Eleicao">
        <h2>Eleição</h2>
        <button className="btn2" onClick={votacao}>Idade Eleicao</button>
            {idade}
    </div>

  )
}

export default Eleicao