import React, { FC } from 'react'
import { StyledModal, StyledRoundedButtonContainer, StyledView } from './LoginController.styled'
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { Control, FieldError } from 'react-hook-form';
import { FormData } from '../../screens/LoginScreen/LoginScreen.component';
import ControlledInput from '../../molecules/ControlledInput/ControlledInput.component';
import ControlledPasswordInput from '../../molecules/ControlledPasswordInput/ControlledPasswordInput.component';
import AwesomeButton from '../../atoms/AwesomeButton/Button.component';
import FlashMessage from 'react-native-flash-message';

interface LoginControllerProps{
  control:Control<FormData, any>;
  handleSubmit:()=>void;
  errors?:{email?:FieldError|undefined,password?:FieldError|undefined};
  isVisible:boolean;
  closeModal:()=>void;
  fastSignIn:(data:FormData)=>void;
}

const LoginController:FC<LoginControllerProps> = ({isVisible, control,handleSubmit, errors, closeModal, fastSignIn}) => {
  return (
    <StyledModal hasBackdrop={false} swipeDirection="down" isVisible={isVisible} onSwipeComplete={closeModal} > 
      <FlashMessage position="top" />
      <StyledView >
          <Heading color="secondary">Inicio rápido</Heading>
          <StyledRoundedButtonContainer>
            <AwesomeButton type="secondary" width={60} height={60} rounded onPress={()=>fastSignIn({email:"admin@gmail.com", password:"Admin1234"})}>1</AwesomeButton>
            <AwesomeButton type="secondary" width={60} height={60} rounded onPress={()=>fastSignIn({email:"tecnico@gmail.com", password:"Tecnico1234"})}>2</AwesomeButton>
            <AwesomeButton type="secondary" width={60} height={60} rounded onPress={()=>fastSignIn({email:"cliente@gmail.com", password:"Cliente1234"})}>3</AwesomeButton>
          </StyledRoundedButtonContainer>
          <ControlledInput error={errors?.email} required autoCapitalize='sentences' name="email" placeholder='Email' control={control} />
          <ControlledPasswordInput error={errors?.password} required autoCapitalize='none' name="password" placeholder='Password' control={control} />
          <Button onPress={handleSubmit}>Ingresar</Button>
          <Button variant='secondary' onPress={closeModal}>Cancelar</Button>
      </StyledView>
    </StyledModal>
  )
}

export default LoginController