import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

export default props => {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span> {nome} </span>
        <span> {idade} </span>
        <span> {nerd  ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndirectSon quandoClicar={fornecerInformacoes}></IndirectSon>
    </div>
  )
}
