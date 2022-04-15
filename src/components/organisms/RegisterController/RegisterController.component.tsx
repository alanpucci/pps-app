import React, { FC } from 'react'
import { StyledModal, StyledView } from './RegisterController.styled'
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { Control, FieldError } from 'react-hook-form';
import { FormData } from '../../screens/LoginScreen/LoginScreen.component';
import ControlledInput from '../../molecules/ControlledInput/ControlledInput.component';
import ControlledPasswordInput from '../../molecules/ControlledPasswordInput/ControlledPasswordInput.component';
import FlashMessage from 'react-native-flash-message';

interface LoginControllerProps{
  control:Control<FormData, any>;
  handleSubmit:()=>void;
  errors?:{email?:FieldError|undefined,password?:FieldError|undefined,passwordRepeat?:FieldError|undefined};
  isVisible:boolean;
  closeModal:()=>void;
}

const RegisterController:FC<LoginControllerProps> = ({isVisible, control,handleSubmit, errors, closeModal}) => {
  return (
    <StyledModal swipeDirection="down" isVisible={isVisible} onSwipeComplete={closeModal} > 
      <FlashMessage position="top" />
      <StyledView >
          <Heading color="secondary">REGISTRARSE</Heading>
          <ControlledInput error={errors?.email} required autoCapitalize='none' name="email" placeholder='Email' control={control} />
          <ControlledPasswordInput error={errors?.password} required autoCapitalize='none' name="password" placeholder='Contraseña' control={control} />
          <ControlledPasswordInput error={errors?.passwordRepeat} required autoCapitalize='none' name="passwordRepeat" placeholder='Repetir contraseña' control={control} />
          <Button onPress={handleSubmit}>Registrar</Button>
          <Button variant='secondary' onPress={closeModal}>Cancelar</Button>
      </StyledView>
    </StyledModal>
  )
}

export default RegisterController