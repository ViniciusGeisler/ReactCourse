import React, { useState } from 'react';
import './Input.css'

export default props => {

  const [valor, setValor] = useState('Inicial')

  function  quandoMudar(e) {
    setValor(e.target.value)
    console.log(e)
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>

      </div>
      <input value={valor} onChange={quandoMudar} />
    </div>
  )
}
