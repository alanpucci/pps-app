import React, { FC } from 'react'
import { StyledInput } from './Input.styled';


const Input = ({...props}) => {
  return (
    <StyledInput
      {...props}
    />
  )
}

export default Input