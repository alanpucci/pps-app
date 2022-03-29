import React, { FC } from 'react'
import Modal from '../../molecules/Modal/Modal.component'

interface InvalidCredentialsModal{
    isVisible:boolean;
    onPress:()=>void;
}

const InvalidCredentialsModal:FC<InvalidCredentialsModal> = ({...props}) => {
  return (
    <Modal {...props} heading="Credenciales inválidas" content="Usuario y/o contraseña incorrectos" button="Aceptar" />
  )
}

export default InvalidCredentialsModal