import React from 'react';
import If, { Else } from './If'

function UserInfo(props) {

  const usuario = props.usuario || {}

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem-vindo(a) <strong>{usuario.nome}</strong>!
        <Else>
          Seja bem-vindo(a) Amigão!
        </Else>
      </If>
    </div>
  )
}

export default UserInfo
