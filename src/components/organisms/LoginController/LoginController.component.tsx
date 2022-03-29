import React, { FC } from 'react'
import { StyledModal, StyledView } from './LoginController.styled'
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { Control, FieldError } from 'react-hook-form';
import { FormData } from '../../screens/LoginScreen/LoginScreen.component';
import ControlledInput from '../../molecules/ControlledInput/ControlledInput.component';

interface LoginControllerProps{
  control:Control<FormData, any>;
  handleSubmit:()=>void;
  errors?:{email?:FieldError|undefined,password?:FieldError|undefined};
  isVisible:boolean;
  setIsVisible:(visible:boolean)=>void;
}

const LoginController:FC<LoginControllerProps> = ({isVisible, control,handleSubmit, errors, setIsVisible}) => {
  return (
    <StyledModal swipeDirection="down" isVisible={isVisible} onSwipeComplete={()=>setIsVisible(false)} > 
      <StyledView >
          <Heading color="secondary">INGRESAR</Heading>
          <ControlledInput error={errors?.email} required autoCapitalize='none' name="email" placeholder='Email' control={control} />
          <ControlledInput error={errors?.password} required secureTextEntry autoCapitalize='none' name="password" placeholder='Password' control={control} />
          <Button onPress={handleSubmit}>Ingresar</Button>
          <Button variant='secondary' onPress={() => setIsVisible(false)}>Cancelar</Button>
      </StyledView>
    </StyledModal>
  )
}

export default LoginController