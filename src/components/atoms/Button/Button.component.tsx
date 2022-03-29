import React, { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { StyledButtonPrimary, StyledButtonSecondary, StyledTextPrimary, StyledTextSecondary } from './Button.styled';

interface ButtonProps extends TouchableOpacityProps{
    size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
    variant?: 'primary' | 'secondary'
}

const ButtonVariants = {primary: StyledButtonPrimary, secondary: StyledButtonSecondary};
const TextVariants = {primary: StyledTextPrimary, secondary: StyledTextSecondary};

const Button:FC<ButtonProps> = ({children, onPress, size='full', variant="primary"}) => {
    const Button = ButtonVariants[variant];
    const Text = TextVariants[variant];

  return (
      <Button onPress={onPress} size={size}>
          <Text>
              {children}
          </Text>
      </Button>
  )
}

export default Button