import { Text } from 'react-native'
import React, { FC } from 'react'
import ModalView from 'react-native-modal';
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { StyledView } from './Modal.styled';

interface ModalProps {
    isVisible:boolean;
    onPress?:()=>void;
    heading?:string;
    content?:string;
    button?:string;
}

const Modal:FC<ModalProps> = ({isVisible, onPress, heading, content, button}) => {
  return (
    <ModalView isVisible={isVisible}>
        <StyledView>
            <Heading>{heading}</Heading>
            <Text>{content}</Text>
            <Button onPress={onPress} size="md">{button}</Button>
        </StyledView>
    </ModalView>
  )
}

export default Modal