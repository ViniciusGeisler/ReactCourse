import React from 'react';

function FamilyMember(props) {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  )
}

export default FamilyMember
