import React, { FC } from 'react'
import { StyledInput } from './Input.styled';

const Input = ({...props}) => {
  return (
    <StyledInput
      underlineColor="rgb(126,180,255)"
      activeUnderlineColor='rgb(36,118,231)'
      {...props}
    />
  )
}

export default Input