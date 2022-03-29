import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import Input from '../../atoms/Input/Input.component'
import { TextInputProps, View } from 'react-native';
import { StyledErrorText } from './ControlledInput.styled';

interface ControlledInputProps extends TextInputProps{
  control:Control<any,any>;
  name:string;
  required?:boolean;
  error?:any;
}

const ControlledInput:FC<ControlledInputProps> = ({control,name,required, error,...props}) => {
  return (
    <View>
        <Controller 
            control={control}
            rules={{required:required}}
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
                />
                )}
            name={name}
        />
        {error && <StyledErrorText>Es requerido</StyledErrorText>}
    </View>
  )
}

export default ControlledInput