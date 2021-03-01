import React from 'react';

function WithParams(props) {

  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

  return (
    <div>
      <h2>
        {props.title}
        <p>
          {props.student} tem nota
          <strong> {props.nota} </strong>
           e está
          <strong> {status} </strong>
        </p>
      </h2>
    </div>
  )
}

export default WithParams;
